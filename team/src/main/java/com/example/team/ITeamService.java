package com.example.team;

import java.util.List;
import java.util.Optional;

public interface ITeamService {
    List<Team> findAll();

    Optional<Team> findById(Integer id);

    Team save(Team team);

    Team update(Integer id, Team team);

    void delete(Integer id);
}