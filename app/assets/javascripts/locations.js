$("#modal").find(".modal-content").html("<%= j render 'show', location: @location %>");
initMap(<%=@location.latitude%>, <%=@location.longitude%>);
parse_end(<%=@location.latitude%>, <%=@location.longitude%>);
$("#modal").modal('show');