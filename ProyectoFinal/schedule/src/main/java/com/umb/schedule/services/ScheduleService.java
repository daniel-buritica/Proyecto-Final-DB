package com.umb.schedule.services;

import com.umb.schedule.models.Cita;
import com.umb.schedule.models.Schedule;
import com.umb.schedule.repositories.CitaRepository;
import com.umb.schedule.repositories.ScheduleRepository;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
@Data
@AllArgsConstructor
public class ScheduleService {

    private final ScheduleRepository scheduleRepository;
    private final CitaRepository citaRepository;

    public Flux<Schedule> getSchedules(){
        return scheduleRepository.findAll();
    }
    
    public Flux<Cita> getDates(){
        return citaRepository.findAll();
    }

    public Mono<Schedule> getSchedule(int id){
        return scheduleRepository.findById(id);
    }

    public Mono<Schedule> createSchedule(Schedule schedule){

        return scheduleRepository.save(schedule);
    }

    public Mono<Schedule> updateSchedule(Schedule schedule){
        var scheduleData =  Schedule.builder()
                //.id(id)
                .id(schedule.getId())
                .nombre(schedule.getNombre())
                .apellido(schedule.getApellido())
                .cedula(schedule.getCedula())
                .telefono(schedule.getTelefono())
                .correo(schedule.getCorreo())
                .direccion(schedule.getDireccion())
                .fecha_registro(schedule.getFecha_registro())
                .fecha_cita(schedule.getFecha_cita())
                .tipo(schedule.getTipo())
                .estado(schedule.getEstado())
                .build();
        return scheduleRepository.findById(schedule.getId())
                .flatMap((response) -> scheduleRepository.save(scheduleData));
    }

    public Mono<Void> deleteSchedule(int id){
        return scheduleRepository.deleteById(id);
    }

    public Mono<Void> deleteDate(int id){
        return citaRepository.deleteById(id);
    }

    public Mono<Cita> createCite(Schedule schedule){
        var dataCity = Cita.builder()
                .fecha_registro(schedule.getFecha_registro())
                .fecha_cita(schedule.getFecha_cita())
                .tipo(schedule.getTipo())
                .estado(schedule.getEstado())
                .build();
        return citaRepository.save(dataCity);
    }


}
