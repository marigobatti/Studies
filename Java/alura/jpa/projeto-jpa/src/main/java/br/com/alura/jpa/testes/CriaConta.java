package br.com.alura.jpa.testes;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import br.com.alura.jpa.modelo.Conta;

public class CriaConta {
	public static void main(String[] args) {
		EntityManagerFactory emf = Persistence.createEntityManagerFactory("contas");
		EntityManager entityManager = emf.createEntityManager();
		Conta conta = new Conta();
		conta.setTitular("Leonardo");
		
		entityManager.getTransaction().begin();
		
		entityManager.persist(conta);
		
		entityManager.getTransaction().commit();
	}
}
