package com.umb.schedule.controllers;

import com.umb.schedule.models.Cita;
import com.umb.schedule.models.Schedule;
import com.umb.schedule.services.ScheduleService;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/schedule.umb.com")
@AllArgsConstructor
@CrossOrigin
public class ScheduleController {
 

    private final ScheduleService service;

    @GetMapping("/getall")
    public Flux<Schedule> getAll(){
        return service.getSchedules();
    }

    @GetMapping("/getAllDates")
    public Flux<Cita> getAllDates(){
        return service.getDates();
    }

    @GetMapping("/get/{id}")
    public Mono<Schedule> get(@PathVariable int id){
        return service.getSchedule(id);
    }

    @PostMapping("/create")
    public Mono<Schedule> create(@RequestBody Schedule schedule){
        return service.createSchedule(schedule);
    }

    @PostMapping("/createDates")
    public Mono<Cita> createDates(@RequestBody Schedule schedule){
        return service.createCite(schedule);
    }

    //@PutMapping("/update/{id}")
    @PutMapping("/update")
    public Mono<Schedule> update(@RequestBody Schedule schedule){
        //return service.updateSchedule(schedule, id);
        return service.updateSchedule(schedule);
    }

    //@DeleteMapping("/delete/{id}")
    @DeleteMapping("/delete")
    public Mono<Void> delete(@RequestBody Schedule schedule){
        return service.deleteSchedule(schedule.getId());
    }

    @DeleteMapping("/deleteDate")
    public Mono<Void> dateleCitas(@RequestBody Schedule schedule){
        return service.deleteDate(schedule.getId());
    }
}
