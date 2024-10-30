$(document).ready(function () {
    var page = 1;
    var current_page = 1;
    var total_page = 0;
    var is_ajax_fire = 0;
    var types = new Map();
    var dataCon;
    createHeadTable();
    createForm();
    createEditForm();
    manageData();

    function manageData() {

        $.ajax({
            dataType: 'json',
            url: './GET/getMedico.php',
            data: {page: page}
        }).done(function (data) {
            total_page = Math.ceil(data.total / 10);
            current_page = page;
            $('#pagination').twbsPagination({
                totalPages: total_page,
                visiblePages: current_page,
                onPageClick: function (event, pageL) {
                    page = pageL;
                    if (is_ajax_fire != 0) {
                        getPageData();
                    }
                }
            });

            manageRow(data.data);
            is_ajax_fire = 1;
        });
    }

    function getPageData() {
        $.ajax({
            dataType: 'json',
            url: './GET/getMedico.php',

            data: {page: page}
        }).done(function (data) {
            manageRow(data.data);
        });
    }

    function manageRow(data) {

        dataCon = data;
        var rows = '';
        var i = 0;
        $.each(data, function (key, value) {
            rows = rows + '<tr>';
            rows = rows + '<td>' + value.medico_id + '</td>';
            rows = rows + '<td>' + value.nome + '</td>';
            rows = rows + '<td>' + value.especialidade + '</td>';
            rows = rows + '<td>' + value.crm + '</td>';
            rows = rows + '<td>' + value.telefone + '</td>';
            rows = rows + '<td>' + value.email + '</td>';
            rows = rows + '<td>' + value.usuario_id + '</td>';
            rows = rows + '<td data-id="' + i++ + '">';
            rows = rows + '<button data-toggle="modal" data-target="#edit-item" class="btn btn-primary edit-item">Editar</button> ';
            rows = rows + '<button class="btn btn-danger remove-item"  data-id="' + value.medico_id + '">Deletar</button>';
            rows = rows + '</td>';
            rows = rows + '</tr>';
        });

        $("tbody").html(rows);
    }
    function createHeadTable() {

        var rows = '<tr>';
        rows = rows + '<th> Código </th>';
        rows = rows + '<th> Nome </th>';
        rows = rows + '<th> Especialidade </th>';
        rows = rows + '<th> CRM </th>';
        rows = rows + '<th> Telefone </th>';
        rows = rows + '<th> Email </th>';
        rows = rows + '<th> Usuario </th>';
        rows = rows + '<th width="200px">Ação</th>'
        rows = rows + '</tr>'
        $("thead").html(rows);
    }
    function createForm() {
        var html = '';
        //html = html + '<div class="form-group">';
        //html = html + '<label class="control-label" for="medico_id">Código</label>';
        //html = html + '<input type="text" name="medico_id" class="form-control" data-error="Por favor entre com o codmedico" required />';
        //html = html + '<div class="help-block with-errors"></div>';
        //html = html + '</div>';
        html = html + '<div class="form-group">';
        html = html + '<label class="control-label" for="nome">Nome</label>';
        html = html + '<input type="text" name="nome" class="form-control" data-error="Por favor entre com o nome" required />';
        html = html + '<div class="help-block with-errors"></div>';
        html = html + '</div>';
        html = html + '<div class="form-group">';
        html = html + '<label class="control-label" for="especialidade">Especialidade</label>';
        html = html + '<input type="text" name="especialidade" class="form-control" data-error="Por favor entre com a especialidade" required />';
        html = html + '<div class="help-block with-errors"></div>';
        html = html + '</div>';
        html = html + '<div class="form-group">';
        html = html + '<label class="control-label" for="crm">CRM</label>';
        html = html + '<input type="text" name="crm" class="form-control" data-error="Por favor entre com o crm" required />';
        html = html + '<div class="help-block with-errors"></div>';
        html = html + '</div>';
        html = html + '<div class="form-group">';
        html = html + '<label class="control-label" for="telefone">Telefone</label>';
        html = html + '<input type="text" name="telefone" class="form-control" data-error="Por favor entre com o telefone" required />';
        html = html + '<div class="help-block with-errors"></div>';
        html = html + '</div>';
        html = html + '<div class="form-group">';
        html = html + '<label class="control-label" for="email">Email</label>';
        html = html + '<input type="text" name="email" class="form-control" data-error="Por favor entre com o email" required />';
        html = html + '<div class="help-block with-errors"></div>';
        html = html + '</div>';
        html = html + '<div class="form-group">';
        html = html + '<button type="submit" class="btn crud-submit btn-success">Salvar</button>';
        html = html + '</div>';
        $("#create-item").find("form").html(html);
    }
    function createEditForm() {

        var html = '<input type="hidden" name="cod" class="edit-id">';
        html = html + '<div class="form-group">';
        html = html + '<label class="control-label" for="medico_id">Código</label>';
        html = html + '<input type="text" name="medico_id" class="form-control" data-error="Por favor entre com o codmedico" required />';
        html = html + '<div class="help-block with-errors"></div>';
        html = html + '</div>';
        html = html + '<div class="form-group">';
        html = html + '<label class="control-label" for="nome">Nome</label>';
        html = html + '<input type="text" name="nome" class="form-control" data-error="Por favor entre com o nome" required />';
        html = html + '<div class="help-block with-errors"></div>';
        html = html + '</div>';
        html = html + '<div class="form-group">';
        html = html + '<label class="control-label" for="especialidade">Especialidade</label>';
        html = html + '<input type="text" name="especialidade" class="form-control" data-error="Por favor entre com a especialidade" required />';
        html = html + '<div class="help-block with-errors"></div>';
        html = html + '</div>';
        html = html + '<div class="form-group">';
        html = html + '<label class="control-label" for="crm">CRM</label>';
        html = html + '<input type="text" name="crm" class="form-control" data-error="Por favor entre com o crm" required />';
        html = html + '<div class="help-block with-errors"></div>';
        html = html + '</div>';
        html = html + '<label class="control-label" for="telefone">Telefone</label>';
        html = html + '<input type="text" name="telefone" class="form-control" data-error="Por favor entre com o telefone" required />';
        html = html + '<div class="help-block with-errors"></div>';
        html = html + '</div>';
        html = html + '<div class="form-group">';
        html = html + '<label class="control-label" for="email">Email</label>';
        html = html + '<input type="text" name="email" class="form-control" data-error="Por favor entre com o email" required />';
        html = html + '<div class="help-block with-errors"></div>';
        html = html + '</div>';
        html = html + '<div class="form-group">';
        html = html + '<button type="submit" class="btn crud-submit-edit btn-success">Salvar</button>';
        html = html + '</div>';
        $("#edit-item").find("form").html(html);
    }


    $(".crud-submit").click(function (e) {
        e.preventDefault();
        var form_action = $("#create-item").find("form").attr("action");
        var medico_id = $("#create-item").find("input[name='medico_id']").val();
        var nome = $("#create-item").find("input[name='nome']").val();
        var especialidade = $("#create-item").find("input[name='especialidade']").val();
        var crm = $("#create-item").find("input[name='crm']").val();
        var telefone = $("#create-item").find("input[name='telefone']").val();
        var email = $("#create-item").find("input[name='email']").val();

        $.ajax({
            dataType: 'json',
            type: 'POST',
            url: form_action,
            data: {medico_id: medico_id, nome: nome, especialidade: especialidade, crm: crm, telefone: telefone, email: email}
        }).done(function (data) {
            $("#create-item").find("input[name='medico_id']").val('');
            $("#create-item").find("input[name='nome']").val('');
            $("#create-item").find("input[name='especialidade']").val('');
            $("#create-item").find("input[name='crm']").val('');
            $("#create-item").find("input[name='telefone']").val('');
            $("#create-item").find("input[name='email']").val('');
            getPageData();
            $(".modal").modal('hide');
            toastr.success(data.msg, 'Alerta de Sucesso', {timeOut: 5000});

        });

    });
    $("body").on("click", ".edit-item", function () {
        var index = $(this).parent("td").data('id');

        var medico_id = dataCon[index].medico_id;
        var nome = dataCon[index].nome;
        var especialidade = dataCon[index].especialidade;
        var crm = dataCon[index].crm;
        var telefone = dataCon[index].telefone;
        var email = dataCon[index].email;

        $("#edit-item").find("input[name='medico_id']").val(medico_id);
        $("#edit-item").find("input[name='nome']").val(nome);
        $("#edit-item").find("input[name='especialidade']").val(especialidade);
        $("#edit-item").find("input[name='crm']").val(crm);
        $("#edit-item").find("input[name='telefone']").val(telefone);
        $("#edit-item").find("input[name='email']").val(email);
    });

    $(".crud-submit-edit").click(function (e) {

        e.preventDefault(); 
        var form_action = $("#edit-item").find("form").attr("action");
        var medico_id = $("#edit-item").find("input[name='medico_id']").val();
        var nome = $("#edit-item").find("input[name='nome']").val();
        var especialidade = $("#edit-item").find("input[name='especialidade']").val();
        var crm = $("#edit-item").find("input[name='crm']").val();
        var telefone = $("#edit-item").find("input[name='telefone']").val();
        var email = $("#edit-item").find("input[name='email']").val();

        $.ajax({
            dataType: 'json',
            type: 'POST',
            url: form_action,
            data: {medico_id: medico_id, nome: nome, especialidade: especialidade, crm: crm, telefone: telefone, email: email}

        }).done(function (data) {

            getPageData();
            $(".modal").modal('hide');
            toastr.success(data.msg, 'Alerta de Sucesso', {timeOut: 5000});
        });


    });

    function getDataSelect(type, select) {

        $.ajax({
            dataType: 'json', url: 'Acesso' + type,
            data: {page: page}
        }).done(function (data) {
            manageSelectOption(data.data, select, type);
        });
    }

    $("body").on("click", ".remove-item", function () {
        var medico_id = $(this).data('id');
        if (confirm("Você tem certeza que deseja deletar este medico?")) {
            $.ajax({
                type: "POST",
                url: "./CRUD/deleteMedico.php",
                data: {medico_id: medico_id},
                success: function (response) {
                    // Atualiza a tabela após a exclusão
                    getPageData();
                    toastr.success("Medico deletado com sucesso!", 'Alerta de Sucesso', {timeOut: 5000});
                },
                error: function () {
                    toastr.error("Erro ao deletar o medico.", 'Alerta de Erro', {timeOut: 5000});
                }
            });
        }
    });


});
