package com.example.player;

import java.util.List;
import java.util.Optional;

public interface IPlayerService {
        List<Player> findAll();
        Optional<Player> findById(Integer id);
        Player save(Player player);
        Player update(Integer id, Player player);
        void delete(Integer id);
}
