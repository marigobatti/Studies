package br.com.casadocodigo.loja.model;

import javax.persistence.Entity;

@Entity
public class Produto {
	private String titulo;
	private String autor;
	private String descricao;
	private int paginas;
	
	public String getTitulo() {
		return titulo;
	}
	
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}
	
	public String getAutor() {
		return autor;
	}
	
	public void setAutor(String autor) {
		this.autor = autor;
	}
	
	public String getDescricao() {
		return descricao;
	}
	
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	
	public int getPaginas() {
		return paginas;
	}
	
	public void setPaginas(int paginas) {
		this.paginas = paginas;
	}

	@Override
	public String toString() {
		return "Produto [titulo=" + titulo + ", autor=" + autor + ", descricao=" + descricao + ", paginas=" + paginas
				+ "]";
	}
}
