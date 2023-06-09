package com.systemcheck.controller;



import com.systemcheck.config.JwtTokenUtil;
import com.systemcheck.entity.JwtRequest;
import com.systemcheck.entity.JwtResponse;
import com.systemcheck.service.JwtUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin
public class JwtAuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private JwtUserDetailsService userDetailsService;

    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest ) throws Exception {
        authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());
        String userId = authenticationRequest.getUsername();
        final UserDetails userDetails = userDetailsService.loadUserByUsername(userId);
        final String token = jwtTokenUtil.generateToken(userDetails);
        final String refreshToken = jwtTokenUtil.generateRefreshToken(userDetails);
        final String role = userDetailsService.userRoleByUserId(userId);
        final String userName = userDetailsService.userNameByUserId(userId);
        return ResponseEntity.ok(new JwtResponse(token, refreshToken, role, userId, userName));
    }

    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }
}
