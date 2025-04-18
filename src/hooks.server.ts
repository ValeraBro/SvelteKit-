export const handle = async ({ event, resolve }) => {
	// Заглушка для API-запросов при статической сборке
	if (event.url.pathname.startsWith('/api')) {
	  return new Response(null, { status: 404 });
	}
	
	return resolve(event);
  };