package com.hackathon.monopoly.config;

import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.header.writers.frameoptions.XFrameOptionsHeaderWriter;

public class MonopolySecurityConfig /*extends WebSecurityConfigurerAdapter */{

    /*@Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication()
                .withUser("Mike").password("Mike").roles("USER").and()
                .withUser("Alex").password("Alex").roles("USER").and()
                .withUser("Mikhail").password("Mikhail").roles("USER").and()
                .withUser("Hanna").password("Hanna").roles("USER").and()
                .withUser("Monopoly").password("Monopoly").roles("USER");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .headers().addHeaderWriter(
                        new XFrameOptionsHeaderWriter(
                                XFrameOptionsHeaderWriter.XFrameOptionsMode.SAMEORIGIN)).and()
                .authorizeRequests()
                .antMatchers("/resources/**").permitAll()
                .anyRequest().authenticated()
                .and()
                .formLogin()
                .defaultSuccessUrl("/index.html")
                .loginPage("/login.html")
                .failureUrl("/login.html?error")
                .permitAll()
                .and()
                .logout()
                .logoutSuccessUrl("/login.html?logout")
                .logoutUrl("/logout.html")
                .permitAll();

    }*/
}
