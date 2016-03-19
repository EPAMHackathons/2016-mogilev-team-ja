package com.hackathon.monopoly.model;

import java.util.List;

/**
 * Created by irina on 19.03.2016.
 */
public class Cell {
    private Integer id;
    private String name;
    private Player owner;
    private Long price;
    private List<Long> rent;
    private Integer level;
    private String tile;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Player getOwner() {
        return owner;
    }

    public void setOwner(Player owner) {
        this.owner = owner;
    }

    public Long getPrice() {
        return price;
    }

    public void setPrice(Long price) {
        this.price = price;
    }

    public Integer getLevel() {
        return level;
    }

    public void setLevel(Integer level) {
        this.level = level;
    }

    public String getTile() {
        return tile;
    }

    public void setTile(String tile) {
        this.tile = tile;
    }

    public List<Long> getRent() {
        return rent;
    }

    public void setRent(List<Long> rent) {
        this.rent = rent;
    }
}
