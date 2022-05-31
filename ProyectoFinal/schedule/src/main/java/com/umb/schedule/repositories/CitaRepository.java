package com.umb.schedule.repositories;

import com.umb.schedule.models.Cita;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;

public interface CitaRepository extends ReactiveCrudRepository<Cita, Integer> {
}
