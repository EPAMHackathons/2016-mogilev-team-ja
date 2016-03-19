package com.hackathon.monopoly.model;

import java.util.List;

/**
 * Created by irina on 19.03.2016.
 */
public class Map {
    private List<Cell> fields;
    private List<Player> players;
    private List<Card> chance;
    private List<Card> chest;

    public List<Cell> getFields() {
        return fields;
    }

    public void setFields(List<Cell> fields) {
        this.fields = fields;
    }

    public List<Player> getPlayers() {
        return players;
    }

    public void setPlayers(List<Player> players) {
        this.players = players;
    }

    public List<Card> getChance() {
        return chance;
    }

    public void setChance(List<Card> chance) {
        this.chance = chance;
    }

    public List<Card> getChest() {
        return chest;
    }

    public void setChest(List<Card> chest) {
        this.chest = chest;
    }
}
