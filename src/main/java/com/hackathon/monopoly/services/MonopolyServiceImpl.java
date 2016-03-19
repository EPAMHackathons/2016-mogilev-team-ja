package com.hackathon.monopoly.services;

import com.hackathon.monopoly.model.GameMap;
import com.hackathon.monopoly.model.Player;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.security.core.userdetails.UserDetails;

public class MonopolyServiceImpl implements MonopolyService {

    private static final String PARTICIPANTS_UPDATE = "/topic/updateParticipants";
    private static final String REQUEST_EVENT = "/topic/requestEvent";
    private static final String RESPONSE_EVENT = "/topic/responseEvent";
    private static final String START_GAME = "/topic/startGame";

    @Autowired
    private SimpMessageSendingOperations messagingTemplate;

    private static final GameMap game = new GameMap();
    private static final Map<Integer, Player> players = new HashMap<>();
    
    private static int gameId = 0;

    @Override
    public void addPlayer(Player player) {
        messagingTemplate.convertAndSendToUser(REQUEST_EVENT, RESPONSE_EVENT, player);
    }

    @Override
    public GameMap createGame() {
        int id = getId();
        game.setId(id);
        return game;
    }

    private static synchronized int getId() {
        return ++gameId;
    }

    @Override
    public synchronized Player createPlayer(String name) {
        Player player = new Player();
        player.setId(getId());
        player.setName(name);
        game.getPlayers().add(player);
        messagingTemplate.convertAndSend(PARTICIPANTS_UPDATE, player);
        
        return player;
    }
    
    @Override
    public void startGameIfFull() {
    	if(game.getPlayers().size() >= 4) {
    		messagingTemplate.convertAndSend(START_GAME, game);
    	}
    }

    
}
