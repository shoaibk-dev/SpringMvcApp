<%@page import="io.oncure.auth.Authentication"%>

<% 
	Authentication auth = new Authentication();
%>

<%=auth.process(request, response) %>
