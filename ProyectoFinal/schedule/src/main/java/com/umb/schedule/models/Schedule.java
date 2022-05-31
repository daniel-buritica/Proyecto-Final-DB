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
public class Schedule {
    @Id
    private int id;
    @Column
    private String nombre;
    @Column
    private String apellido;
    @Column
    private int cedula;
    @Column
    private String telefono;
    @Column
    private String correo;
    @Column
    private String direccion;
    @Column
    private Timestamp fecha_registro;
    @Column
    private Timestamp fecha_cita;
    @Column
    private String tipo;
    @Column
    private Boolean estado;

}
