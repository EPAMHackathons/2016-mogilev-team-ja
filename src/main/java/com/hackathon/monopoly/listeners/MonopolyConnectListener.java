package com.hackathon.monopoly.listeners;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationListener;
import org.springframework.web.socket.messaging.SessionConnectEvent;


public class MonopolyConnectListener implements ApplicationListener<SessionConnectEvent>{

    private static final Logger log = LoggerFactory.getLogger(MonopolyConnectListener.class);
    
    @Override
    public void onApplicationEvent(SessionConnectEvent event) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}
