import React, { useState } from 'react';
import { Route } from 'react-router-dom';

/*
 * path: String - Caminho base do módulo
 * module: Object - Componentes do módulo (página)
 * actions: Array - Ações a incluir na rotas, seguir o padrão: [{page: caminho_url}]; Onde 'page' é um dos componentes do módulo e 'page_path' é a url complementar após o parâmetro 'path'
 */
export default function ModuleRoute({ path, module, moduleTitle, actions }) {
  const [alerta, setAlerta] = useState('');

  return (
    <>
      {actions.map((action, i) => {
        const { page, pagePath, pageTitle } = action;
        return (
          <Route
            key={i}
            exact
            path={path + pagePath}
            component={() => {
              document.title = (pageTitle ? pageTitle + ' - ' : '') + moduleTitle + ' - e-Estado';
              return module[page]({ moduleTitle, pageTitle, alerta, setAlerta, path });
            }}
          />
        );
      })}
    </>
  );
}
