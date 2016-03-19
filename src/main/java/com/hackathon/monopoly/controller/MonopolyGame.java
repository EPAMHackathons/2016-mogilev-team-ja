package com.hackathon.monopoly.controller;


import com.hackathon.monopoly.model.GameMap;

public class MonopolyGame {
    private Integer id;
    private GameMap gameMap;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public GameMap getGameMap() {
        return gameMap;
    }

    public void setGameMap(GameMap gameMap) {
        this.gameMap = gameMap;
    }
    
    
}
