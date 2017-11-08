"@fixture Mixin";
"@page http://devexpress.github.io/testcafe/example/";

'@mixin'['Authentication'] = {
    'Type in input login': function () {
        var input = $('#login_input');
        act.type(input, 'Peter Parker');
    },
    'Type in input password': function () {
        var input = $('#password_input');
        act.type(input, '12345');
    },
    'Click submit button': function () {
        var submitButton = $('#submit_button');
        act.click(submitButton);
    }
};

'@test'['View profile'] = {
    'Log In': '@mixin Authentication',

    'Click link "My Profile"': function () {
        var link = $(':containsExcludeChildren(My Profile)');
        act.click(link);
    }
};

'@test'['Edit profile'] = {
    'Log In': '@mixin Authentication',

    'Click link "Edit Profile"': function () {
        var link = $(':containsExcludeChildren(Edit Profile)');
        act.click(link);
    }
}; 