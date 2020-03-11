package br.com.alura.gerenciador.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class HelloWorld
 */
//@WebServlet("/hello")
public class HelloWorld extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException
	{
		PrintWriter out = resp.getWriter();
		out.println("<!DOCTYPE html>\r\n" +
			"<html>\r\n" +
			"<head>\r\n" +
			"<meta charset=\"ISO-8859-1\">\r\n" +
			"<title>Insert title here</title>\r\n" +
			"</head>\r\n" +
			"<body>\r\n" +
			"	Hello World! Bem vindo ao gerenciador de cursos Alura!\r\n" +
			"</body>\r\n" +
			"</html>");
	}

}
