package com.devsuperior.dsmovie.controllers;

import com.devsuperior.dsmovie.DTO.MovieDTO;
import com.devsuperior.dsmovie.DTO.ScoreDTO;
import com.devsuperior.dsmovie.services.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/scores")
public class ScoreController {

    @Autowired
    private ScoreService scoreService;

    @PutMapping
    public MovieDTO saveScore(@RequestBody ScoreDTO scoreDTO) {
        MovieDTO movieDTO = scoreService.saveScore(scoreDTO);
        return movieDTO;
    }
}
