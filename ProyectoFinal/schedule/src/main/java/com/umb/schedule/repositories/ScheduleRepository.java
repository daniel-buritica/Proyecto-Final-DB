package com.umb.schedule.repositories;

import com.umb.schedule.models.Schedule;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;

public interface ScheduleRepository extends ReactiveCrudRepository<Schedule, Integer> {
}
