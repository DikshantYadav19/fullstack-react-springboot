package com.todo.restservices.jwt;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtInMemoryUserDetailsService implements UserDetailsService {

  static List<JwtUserDetails> inMemoryUserList = new ArrayList<>();

  static {
    inMemoryUserList.add(new JwtUserDetails(1L, "admin",
        "$2a$04$sl5CA6zIHrJTrpPpdjiE1.Y8u1sTcLsLGKnGI7DEfRILM7ld.n9L6", "ROLE_USER_2"));
    // $2a$10$HzNf.JHIZF6vCEvcoJWyZ.X8gvLXigwfFSC2UwFbkUP1WtBnAvDyG
    inMemoryUserList.add(new JwtUserDetails(1L, "dikshant",
            "$2a$10$HzNf.JHIZF6vCEvcoJWyZ.X8gvLXigwfFSC2UwFbkUP1WtBnAvDyG", "ROLE_USER_2"));
  }

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    Optional<JwtUserDetails> findFirst = inMemoryUserList.stream()
        .filter(user -> user.getUsername().equals(username)).findFirst();

    if (!findFirst.isPresent()) {
      throw new UsernameNotFoundException(String.format("USER_NOT_FOUND '%s'.", username));
    }

    return findFirst.get();
  }

}


