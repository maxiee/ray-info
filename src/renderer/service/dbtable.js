import lf from 'lovefield';

const schemaBuilder = lf.schema.create('rayinfo', 1);

schemaBuilder.createTable('feeds')
    .addColumn('id', lf.Type.INTEGER)
    .addColumn('uuid', lf.Type.STRING)
    .addColumn('link', lf.Type.STRING)
    .addColumn('xmlurl', lf.Type.STRING)
    .addColumn('favicon', lf.Type.STRING)
    .addColumn('description', lf.Type.STRING)
    .addColumn('title', lf.Type.STRING)
    .addColumn('category', lf.Type.STRING)
    .addPrimaryKey(['id'], true)
    .addUnique('uniqueUuid', ['uuid'])
    .addIndex('idxUUid', ['uuid'], false)
    .addNullable(['description', 'category', 'link']);

export let database;
export let feedTable;

export async function init() {
    database = await schemaBuilder.connect({
        // onUpgrade: (rawDb) => {}
    });
    feedTable = database.getSchema().table('feeds');
}