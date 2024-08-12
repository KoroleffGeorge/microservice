package com.example.team;

import com.example.player.Player;
import com.example.player.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/teams")
public class TeamController {

    @Autowired
    private final TeamService teamService;

    @Autowired
    private final PlayerService playerService;

    @Autowired
    public TeamController(TeamService teamService, PlayerService playerService) {
        this.teamService = teamService;
        this.playerService = playerService;
    }


    @GetMapping("/{teamId}/players")
    public ResponseEntity<List<Player>> getPlayersByTeam(@PathVariable Integer teamId) {
        Optional<Team> team = teamService.findById(teamId);
        if (team.isPresent()) {
            List<Player> players = playerService.findAll().stream()
                    .filter(player -> player.getTeam().equals(teamId))
                    .toList();
            return ResponseEntity.ok().body(players);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}