<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Livros de Java, Android, IOS, Ruby, PHP e muito mais - Casa do Código</title>
</head>
<body>
	<form action="/casadocodigo/produtos" method="POST">
		<div>
			<label>Título</label>
			<input type="text" name="titulo" />
		</div>
		<div>
			<label>Autor</label>
			<input type="text" name="autor" />
		</div>
		<div>
			<label>Descrição</label>
			<textarea rows="10" cols="20" name="descricao"></textarea>
		</div>
		<div>
			<label>Páginas</label>
			<input type="number" name="paginas" />
		</div>
		<button type="submit">Cadastrar</button>
	</form>
</body>
</html>