package com.example.team;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class TeamService implements ITeamService{
    private final TeamRepository repository;

    public TeamService(TeamRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Team> findAll() {
        return (List<Team>) repository.findAll();
    }

    @Override
    public Optional<Team> findById(Integer id) {
        return repository.findById(id);
    }

    @Override
    public Team save(Team team) {
        return repository.save(team);
    }

    @Override
    public Team update(Integer id, Team team) {
        Optional<Team> existingTeam = repository.findById(id);
        if (existingTeam.isPresent()) {
            return repository.save(updateParametersTeam(existingTeam, team));
        } else {
            return null;
        }
    }

    private Team updateParametersTeam(Optional<Team> existingTeam, Team team) {
        Team updatedTeam = existingTeam.get();
        updatedTeam.setName(team.getName());
        updatedTeam.setBudget(team.getBudget());
        updatedTeam.setDateOfFoundation(team.getDateOfFoundation());
        updatedTeam.setStadium(team.getStadium());
        return updatedTeam;
    }

    @Override
    public void delete(Integer id) {
        repository.deleteById(id);
    }
}
