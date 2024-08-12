package com.example.player;

import jakarta.persistence.*;
import org.jetbrains.annotations.NotNull;

import java.time.LocalDate;

@Entity
@Table(name = "players")
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @NotNull
    private String name;
    @NotNull
    private LocalDate birthday;
    private Integer number;
    @NotNull
    private String position;
    private Integer goals = 0;
    private Integer assists = 0;
    private Integer cleanSheet = 0;
    private Integer team;

    public Player() { }
    public Player(String name, LocalDate birthday, Integer number, String position,
                  Integer goals, Integer assists, Integer cleanSheet, Integer team) {
        this.name = name;
        this.birthday = birthday;
        this.number = number;
        this.position = position;
        this.goals = goals;
        this.assists = assists;
        this.cleanSheet = cleanSheet;
        this.team = team;
    }

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

    public LocalDate getBirthday() {
        return birthday;
    }

    public void setBirthday(LocalDate birthday) {
        this.birthday = birthday;
    }

    public Integer getNumber() {
        return number;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public Integer getGoals() {
        return goals;
    }

    public void setGoals(Integer goals) {
        this.goals = goals;
    }

    public Integer getAssists() {
        return assists;
    }

    public void setAssists(Integer assists) {
        this.assists = assists;
    }

    public Integer getCleanSheet() {
        return cleanSheet;
    }

    public void setCleanSheet(Integer cleanSheet) {
        this.cleanSheet = cleanSheet;
    }

    public Integer getTeam() {
        return team;
    }

    public void setTeam(Integer team) {
        this.team = team;
    }
}