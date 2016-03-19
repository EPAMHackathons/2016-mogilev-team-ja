package com.hackathon.monopoly.services;

import com.hackathon.monopoly.model.GameMap;
import com.hackathon.monopoly.model.Player;


public interface MonopolyService {
    
    void addPlayer(Player player);
    
    GameMap createGame();
    
    Player createPlayer(String name);
    
    public void startGameIfFull();
}
