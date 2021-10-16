import { useLocation, useParams } from 'react-router-dom';
import { ExtractRouteParams, generatePath } from 'react-router';
import urlon from 'urlon';
import { useMemo } from 'react';

export function useRouteParams() {
  const urlParams = useParams() as Record<string, any>;
  const searchParamsString = useLocation().search.slice(1);
  const searchParams = useMemo(
    () => (!!searchParamsString ? urlon.parse(searchParamsString) : {}),
    [searchParamsString]
  );
  return useMemo(() => ({ urlParams, searchParams }), [
    searchParams,
    urlParams,
  ]);
}

type Params<S extends string> = {
  routeParams?: ExtractRouteParams<S, string | number | boolean> | undefined;
  queryParams?: Record<string, any> | undefined;
};
export function generateUrlonPath<S extends string>(
  path: S,
  params?: Params<S>
) {
  const queryUrlonParams = urlon.stringify(params?.queryParams || {});
  const generatedPath = generatePath(path, params?.routeParams);
  return queryUrlonParams
    ? `${generatedPath}?${queryUrlonParams}`
    : generatedPath;
}
