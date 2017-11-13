import { Selector } from 'testcafe';

fixture `Mixins`
	.page `https://www.python.org/accounts/login/`;
	
test('Mixin_Login', async t => {
	
	
    await t
        .typeText(Selector('input').withAttribute('placeholder', 'Username'), "vigneshb.connect@gmail.com") 			//Email entry//
        .typeText(Selector('input').withAttribute('placeholder', 'Password'), "987654")			
					//Password entry//
		.click(Selector('button').withAttribute('class', 'primaryAction'));
					//Submit//
	await mixin_Search(t, "Django");										//Search//
	await mixin_Navigation(t, "psf-meta ");									//Navigation//
	await mixin_Search(t, "integration");
	await mixin_Navigation(t, "shop-meta ");
	await mixin_Navigation(t, "jobs-meta ");
	await t.click(Selector('h1').withAttribute('class', 'site-headline')); 	//Home page //

});

//Search//
const mixin_Search = async (t, searchString) => {
			
	await t
		.typeText(Selector('input').withAttribute('placeholder', 'Search'), searchString)			
					//Password entry//
		.click(Selector('button').withAttribute('class', 'search-button'))
}

//Page Navigation//
const mixin_Navigation = async (t, page_link) => {
	await t.click(Selector('li').withAttribute('class', page_link));
}