package com.hackathon.monopoly.listeners;

import com.hackathon.monopoly.model.Player;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationListener;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.web.socket.messaging.SessionConnectEvent;


public class MonopolyConnectListener implements ApplicationListener<SessionConnectEvent>{

    private static final Logger log = LoggerFactory.getLogger(MonopolyConnectListener.class);
    
    @Override
    public void onApplicationEvent(SessionConnectEvent event) {
        String wsSessionId = event.getMessage().getHeaders().get(SimpMessageHeaderAccessor.SESSION_ID_HEADER, String.class);
        Player player = new Player();
    }
    
}
