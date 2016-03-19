package com.hackathon.monopoly.controller;

import com.hackathon.monopoly.model.GameMap;
import com.hackathon.monopoly.model.Player;
import com.hackathon.monopoly.services.MonopolyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
public class MonopolyController {
    
    @Autowired
    MonopolyService monopolyService;
    
    
    @RequestMapping(value = "/createGame", method = RequestMethod.GET)
    @ResponseBody
    public GameMap createGame(){
        return monopolyService.createGame();
    }
    
    @RequestMapping(value = "/game/{gameId}", method = RequestMethod.GET)
    public String getGame(@PathVariable Integer gameId) {
        
        return "userPage";
    }
    
    @ResponseBody
    @RequestMapping(value = "/createPlayer/{name}", method = RequestMethod.GET)
    public Player createPlayer(@PathVariable String name) {
        Player player = monopolyService.createPlayer(name);
        monopolyService.startGameIfFull();
        return player;
    }

}
