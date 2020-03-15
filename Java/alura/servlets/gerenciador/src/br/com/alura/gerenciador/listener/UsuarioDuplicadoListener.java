package br.com.alura.gerenciador.listener;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

import javax.servlet.annotation.WebListener;
import javax.servlet.http.HttpSessionAttributeListener;
import javax.servlet.http.HttpSessionBindingEvent;

@WebListener
public class UsuarioDuplicadoListener implements HttpSessionAttributeListener {
	private static final String ATTRIBUTE_NAME = "usuarioLogado";
    private static final Set<Object> USUARIOS_LOGADOS = 
        Collections.synchronizedSet(new HashSet<Object>());
    
    public void attributeAdded(HttpSessionBindingEvent bind)  { 
    	String attributeName = bind.getName();
	    Object attributeValue = bind.getValue();
	    if(ATTRIBUTE_NAME.equals(attributeName) ) {
	        if(!USUARIOS_LOGADOS.add(attributeValue)){
	            bind.getSession().removeAttribute(ATTRIBUTE_NAME);
	        }
	    }
    }

    public void attributeRemoved(HttpSessionBindingEvent bind)  { 
    	String attributeName = bind.getName();
        Object attributeValue = bind.getValue();
        if(ATTRIBUTE_NAME.equals(attributeName)) {
            USUARIOS_LOGADOS.remove(attributeValue);
        }
    }

    public void attributeReplaced(HttpSessionBindingEvent bind) {}	
}
