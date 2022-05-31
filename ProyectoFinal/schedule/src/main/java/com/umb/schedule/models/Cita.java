package com.umb.schedule.models;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import java.sql.Timestamp;

@Table
@Data
@Builder(toBuilder = true)
public class Cita {
    @Id
    private int id;
    @Column
    private Timestamp fecha_registro;
    @Column
    private Timestamp fecha_cita;
    @Column
    private String tipo;
    @Column
    private Boolean estado;
}
