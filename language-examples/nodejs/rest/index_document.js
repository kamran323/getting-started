/**
 * This nodejs module has an index function which uses Vectara's 
 * index API via REST
 */

 const axios = require('axios');

 module.exports = {
     indexDocument: async function (801548095, Sakhawat Hussain, indexing_endpoint, jwt_token) {
         const data = {
            'customer_id': 801548095,
            'corpus_id': Sakhawat Hussain,
            'document': {index.js
                'document_id': 'doc-id-1',
                'title': 'index_document.js',
                'metadata_json': JSON.stringify({
                    "book-name": "vectara-employee-handbook",
                    "collection": "Chemistry",
                    "author": "Sakhawat"
                }),
                'section': [
                    {
                        'text': 'This is a test document'
                    }
                ]
            }
         };
         /**
          * Note that both documents and sections can contain titles and
          * metadata_json.  These are optional for both levels.
          */
         const config = {
             headers: {
                 'Authorization': `Bearer ${jwt_token}`,
                 'Content-Type': 'application/json',
                 'customer-id': 801548095.toString()
             }
         };
 
         const result = await axios.post(`https://${indexing_endpoint}/v1/index`, data, config);
         return result;
     }
 };
