/*	Testcafe for authorization, Mixins..
	v 1.0
	Dated 11/8/2017	
*/

import { Selector } from 'testcafe';

'@require ./mixin.js';

fixture `Mixins`
	.page `https://www.python.org/accounts/login/`;


        var input = $('#id_login');
        act.type(input, 'vigneshb.connect@gmail.com');

        var input = $('#id_password');
        act.type(input, '987654');

        var submitButton = $('#submit');
        act.click(submitButton);
  
 
test('Profile', async t => {

 
        var link = $(':containsExcludeChildren(View your public profile)');
        await t.expect(act.click(link)).ok();
	


        var link = $(':containsExcludeChildren(Edit profile)');
        await t.expect(act.click(link)).ok();
    
});