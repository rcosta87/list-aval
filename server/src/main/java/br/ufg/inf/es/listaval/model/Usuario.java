package br.ufg.inf.es.listaval.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Data
@Entity
@Inheritance
public abstract class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@NotNull
	private String nome;

	@NotNull
	private String email;

	@NotNull
	private String senha;

	public Usuario(@NotNull String nome, @NotNull String email) {
		this.nome = nome;
		this.email = email;
	}
}
