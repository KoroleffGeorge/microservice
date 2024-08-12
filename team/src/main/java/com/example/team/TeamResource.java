package com.example.team;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/teams")
public class TeamResource {

    @Autowired
    TeamService teamService;

    @GetMapping
    public ResponseEntity<List<Team>> getListTeams() {
        List<Team> teams = teamService.findAll();
        return ResponseEntity.ok(teams);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Team> getTeam(@PathVariable Integer id) {
        Optional<Team> team = teamService.findById(id);
        if (team.isPresent()) {
            return ResponseEntity.ok().body(team.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Team> createTeam(@RequestBody Team team) {
        Team savedTeam = teamService.save(team);
        return ResponseEntity.created(URI.create("/teams/" + savedTeam.getId())).body(savedTeam);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Team> updatePlayer(@PathVariable Integer id, @RequestBody Team team) {
        Team updatedTeam = teamService.update(id, team);
        if (updatedTeam != null) {
            return ResponseEntity.ok().body(updatedTeam);
        } else {
            return ResponseEntity.noContent().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTeam(@PathVariable Integer id) {
        teamService.delete(id);
        return ResponseEntity.noContent().build();
    }
}