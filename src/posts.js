import React from 'react';
// import { List, Datagrid, TextField, ReferenceField } from 'react-admin';
import { List, Datagrid, TextField, ReferenceField, EditButton } from 'react-admin';
import {Edit, SimpleForm, DisabledInput, ReferenceInput, SelectInput, TextInput, LongTextInput, Create, Filter } from 'react-admin';

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const PostList = props => (
    <List {...props} filters={<PostFilter />}>
        {/*<Datagrid rowClick="edit">*/}
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                {/*<TextField source="id" />*/}
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            {/*<TextField source="body" />*/}
            <EditButton />
        </Datagrid>
    </List>
);

export const PostEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <ReferenceInput source="userId" reference="users">
                {/*<SelectInput optionText="id" />*/}
                <SelectInput optionText="name" />
            </ReferenceInput>
            {/*<TextInput source="id" />*/}
            <TextInput source="title" />
            {/*<TextInput source="body" />*/}
            <LongTextInput source="body" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Create>
);

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

