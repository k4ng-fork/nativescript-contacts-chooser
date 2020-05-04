/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { NavigatedData, Page } from "tns-core-modules/ui/page";
import { HomeViewModel } from "./home-view-model";
import { ContactsChooser, ContactsChooserResult } from 'nativescript-contacts-chooser';

const chooser = new ContactsChooser();

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;

    page.bindingContext = new HomeViewModel();
    chooser.requestPermission();
}

export function openContact() {
    chooser.open()
        .then((res: ContactsChooserResult) => {
            console.log(res);
        })
}