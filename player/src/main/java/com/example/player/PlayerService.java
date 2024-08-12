package com.example.player;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PlayerService implements IPlayerService {

    private final PlayerRepository repository;

    public PlayerService(PlayerRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Player> findAll() {
        return (List<Player>) repository.findAll();
    }

    @Override
    public Optional<Player> findById(Integer id) {
        return repository.findById(id);
    }

    @Override
    public Player save(Player player) {
        return repository.save(player);
    }

    @Override
    public Player update(Integer id, Player player) {
        Optional<Player> existingPlayer = repository.findById(id);
        if (existingPlayer.isPresent()) {
            return repository.save(updateParametersPlayer(existingPlayer, player));
        } else {
            return null;
        }
    }

    private Player updateParametersPlayer(Optional<Player> existingPlayer, Player player) {
        Player updatedPlayer = existingPlayer.get();
        updatedPlayer.setName(player.getName());
        updatedPlayer.setBirthday(player.getBirthday());
        updatedPlayer.setAssists(player.getAssists());
        updatedPlayer.setNumber(player.getNumber());
        updatedPlayer.setPosition(player.getPosition());
        updatedPlayer.setGoals(player.getGoals());
        updatedPlayer.setCleanSheet(player.getCleanSheet());
        updatedPlayer.setTeam(player.getTeam());
        return updatedPlayer;
    }

    @Override
    public void delete(Integer id) {
        repository.deleteById(id);
    }
}

