package br.ufg.inf.es.listaval.model.aval;

import br.ufg.inf.es.listaval.model.Usuario;
import br.ufg.inf.es.listaval.model.aplic.ResolucaoLista;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Data
@Entity
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class AvaliacaoResolucaoLista {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@NotNull
	@ManyToOne
	@JoinColumn
	private ResolucaoLista resolucaoLista;

	@NotNull
	@ManyToOne
	@JoinColumn
	private Usuario avaliador;

	private Boolean publicada;

	private Float nota;

	@CreatedDate
	private LocalDateTime dataCadastro;

	@ManyToOne
	@JoinColumn
	@CreatedBy
	private Usuario usuarioCadastro;

	@LastModifiedDate
	private LocalDateTime dataAlteracao;

	@ManyToOne
	@JoinColumn
	@LastModifiedBy
	private Usuario usuarioAlteracao;

}
