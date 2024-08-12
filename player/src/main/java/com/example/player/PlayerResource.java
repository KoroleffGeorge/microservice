package com.example.player;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/players")
public class PlayerResource {

    @Autowired
    PlayerService playerService;

    @GetMapping
    //@GetMapping("/players")
    public ResponseEntity<List<Player>> getListPlayers() {
        List<Player> players = playerService.findAll();
        return ResponseEntity.ok().body(players);
    }

    //@GetMapping("/players/{id}")
    @GetMapping("/{id}")
    public ResponseEntity<Player> getPlayer(@PathVariable Integer id) {
        Optional<Player> player = playerService.findById(id);
        if (player.isPresent()) {
            return ResponseEntity.ok().body(player.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    //@PostMapping("/players")
    @PostMapping
    public ResponseEntity<Player> createPlayer(@RequestBody Player player) {
        Player savedPlayer = playerService.save(player);
        return ResponseEntity.created(URI.create("/players/" + savedPlayer.getId())).body(savedPlayer);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Player> updatePlayer(@PathVariable Integer id, @RequestBody Player player) {
        Player updatedPlayer = playerService.update(id, player);
        if (updatedPlayer != null) {
            return ResponseEntity.ok().body(updatedPlayer);
        } else {
            return ResponseEntity.noContent().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePlayer(@PathVariable Integer id) {
        playerService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
