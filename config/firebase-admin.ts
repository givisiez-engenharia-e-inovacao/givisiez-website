import {
  initializeApp,
  cert,
  getApps,
  ServiceAccount,
} from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

// TODO: Replace with your Firebase project's service account credentials
const serviceAccount: ServiceAccount = {
  projectId: 'presente-certo-7b5c5',
  privateKey:
    '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDpLP7EEm1bgF7x\n8Z63igRM+X9EOMn5ANPtzrmxksqQNc9xjSBns1IIImtUsTQpab3N7oiBlz6feW/g\nFFZGwaZduoBH1l9Qlsdr5b1YpAslhj30cq+oWSA3kC/Nlqm7LitvyWcNzzs7mXPP\nJNxYjS+pkuCxhyrXQUZJAPJkCwTIkBGDfzDrRO7+PJTPN3XEOCvsCPqY6SopGvG8\nZqZIf8tgvOREWcfVZQcr7W7VydMtQ9HEx1UvOjnjP0uXMfGBPHF7PVnHENU7Luca\nuTQSOTLf1Gn/uxDUE+Hyohw9xQTsG3vG+Mm5iaKvYl9u/1l4dJhhTKL26oUTTzRN\nnFZG0ddZAgMBAAECggEAAxU7txbxSDTtzHAf45hZDzV7R8kibn7iznGdxenFcNut\nRviRNZ3K112xIpkHMgb6Yfcl6eS4iL4/yuwp6dyUmQemu4xrjTK5J0WN19avaQsZ\n1ZoQlX68LM/kueikjNuC6oL0sFuNkm+odtQrb6ZKO4k8HEzHtbngtoVjLwxwP0CV\n664RJ3Agvray0IyVMNC2SQfzZ9c1FVQ8EjgPdXknbzmX4Rb/XE2f0liS+riw+tSW\nTnnGnajdqywHDVu1Jwi1J6U4BhtVaqYvolu+Zdt34GlYZB1HM3GmgmTzN0VectAO\nQx/BznE86vkcWi1zb/1F1xk0pwxbp0MB45luk6qqAQKBgQD9RyozAsGITctCTcse\nLVSyn2Xm5Pk4furl6sn3NQ01945+g91QKEe+R0FiyHNtqKrJmcjRD/ruEWxrCuZY\nkVA8o9NHfNw4o1SqgFikelOpvvntCH5fuKLG7gl7HF8l6EiIBBQimqQKWNxk+fBt\nhyT9NQY4GRK4oGhX+/hmup2xgQKBgQDrroYVisZpivA0vZNq0r6DkWe2Qd0O5xo2\nhhaAPRJMB4eXCVlTGbGPN5L8dD+Wjgg5osV4ByyWHKkBhgOnfXr/HVLUTHaizXHc\nuBroo5spvHxM9+z6KdCMAtXmpEDgSm7sUnjWVRjlPPWPIHjzfnhHmd7Kg7ru+uez\nz9jEiCTh2QKBgQCj9EVk8AvH6FQDf8hUqJODbZvRc7fA0qfMXciPtk/u92nOjB3f\nnbOTgRzajVfrTJwCFQLiEq4lHjJIuK2T970xA/vo8vK71z8fgCXhky5FW9L9ldn4\nrNTyYXTRtPQC3fLV2Y4POHuoFw3Ub9crj6hqIMD933029t+U1Q9fsL4UAQKBgQDU\naEkt9xGVI4QTdFv9JYxQVWbsSvXpLX1hcH2s+92Wqh6Yj/NyQrDVS5fscPSyQrXF\nBB8GayjS7WegGOEIPb3xWMNC1NsDJTeeXkraKkF4XwiD8dohKDhtR0zyfkx+GHda\nA4YmXTF/wO3rHbAEe5H5rgKt8AU0xuq2EvfhQHZFGQKBgEYvx+RW2LSPzh7Xz8x1\nV8HZXl74iEntdOuYP9v4L9zc9owH6N3jkrKKUmsSNaZR69QY6lAWqHKYw9PGU4Vr\n+AMtxWjNtfZa31NtYSATSM3xn5d8TsY1qYgDNXW9FzzMFcllf385h42tKfDJTa46\nKdh/DrSMzcjVFDAtollh0lOz\n-----END PRIVATE KEY-----\n'.replace(
      /\\n/g,
      '\n'
    ),
  clientEmail:
    'firebase-adminsdk-fbsvc@presente-certo-7b5c5.iam.gserviceaccount.com',
};

if (!getApps().length) {
  initializeApp({
    credential: cert(serviceAccount),
  });
}

const adminAuth = getAuth();

export { adminAuth };
