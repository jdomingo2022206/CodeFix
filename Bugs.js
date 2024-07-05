/*
* bk{
	? index.js( sintaxis
        Todo: Mala importacion del server, le faltaba el .js
        ! import ExpressServer from 	"./configs/server";
        *import ExpressServer from 	"./configs/server.js";
    )
    
    ? configs/db.js( logica
        Todo: No conecta a la db pq esta mala la sintaxis o logica del codigo, debido a que tiene la conexion en el catch
        !   }catch(e){
        !    await mongoose.connect(process.env.URI_MONGO, {
        !    serverSelectionTimeoutMS: 5000,
        !    maxPoolSize: 50
        !   });
        !   console.log('Database connection failed', err)
        !   }

        *    await mongoose.connect(process.env.URI_MONGO, {
        *    serverSelectionTimeoutMS: 5000,
        *    maxPoolSize: 50
        *   });
        *   }catch(e){
        *   console.log('Database connection failed', err)
        *   }
    )
    

    ? .env(
        Todo: La url de la db esta mal puesta debido a que le fata un slash 
        ! URI_MONGO=mongodb:/localhost:27017/blog
        * URI_MONGO=mongodb://localhost:27017/blog
    )

    ? src/middlewares/validar-cant-peticiones(
        Todo: No permitia realizar peticiones
        ! const apiLimiter = rateLimit ({
        !     windowMs: 15 * 60 * 1000,
        !     max: 0
        ! })

        * const apiLimiter = rateLimit ({
        *     windowMs: 15 * 60 * 1000,
        *     max: 100
        * })
    )

    ? src/post/post.routes.js(
        Todo: Estaba llamando a un metodo erroneo
        !   import {
        !       createPost,
        !       findPosts,
        !       findPostByName,
        !       getCommentsByPostName,
        !   } from "./post.controller.js";
        !
        ! router.post(
        ! "/posts/:name/add-comments",
        ! [
        !     check("name", "No puedes publicar de manera anónima").not().isEmpty(),
        !     check("text", "No hay contenido para agregar al comentario")
        !     .not()
        !     .isEmpty(),
        !     validarCampos,
        ! ],
        ! createPost
        ! );

        *   import {
        *       createPost,
        *       findPosts,
        *       findPostByName,
        *       getCommentsByPostName,
        *       addcommentToPost
        *   } from "./post.controller.js";
        *
        * router.post(
        * "/posts/:name/add-comments",
        * [
        *     check("name", "No puedes publicar de manera anónima").not().isEmpty(),
        *     check("text", "No hay contenido para agregar al comentario")
        *     .not()
        *     .isEmpty(),
        *     validarCampos,
        * ],
        * addcommentToPost
        * );
    )
}
*/









/*
* ft{
    ? src/components/ArticleList.jsx(
        Todo: Habia un nuevo div con un h1 fuera del div original lo que generaba un error al tener dos divs, entonces lo quite, no se si era necesario o no

        !    export const ArticleList = () => {
        !    const articlesList = usePosts();
        !    return (
        !        <div className="mb-20">
        !        <h1 className="sm:text-4xl text-2xl font-bold my-6">Publicaciones</h1>
        !            <div className="container py-4 mx-auto">
        !                <div className="flex flex-wrap -m-4">
        !                <ArticleCard articles={articlesList}/>  
        !                </div>
        !            </div>
        !        </div>
        !        <div>
        !        <h1>Lista de publicaciones</h1>
        !        </div>
        !    );
        !    };
        
        *    export const ArticleList = () => {
        *    const articlesList = usePosts();
        *    return (
        *        <div className="mb-20">
        *        <h1 className="sm:text-4xl text-2xl font-bold my-6">Publicaciones</h1>
        *            <div className="container py-4 mx-auto">
        *                <div className="flex flex-wrap -m-4">
        *                <ArticleCard articles={articlesList}/>  
        *                </div>
        *            </div>
        *        </div>
        *    );
        *    };
    )

    ? src/services/api.js(
        Todo: En la url no esta consumiendo el puerto de la db 
        ! const apiClient = axios.create({
        !     baseURL: 'http://127.0.0.1/blog/v2',
        !     timeout:5000,
        ! })
        * const apiClient = axios.create({
        *     baseURL: 'http://127.0.0.1:3000/blog/v2',
        *     timeout:5000,
        * })
    )

    ? src/services/api.js(
        Todo: Estaba utilizando un metodo post en lugar de un metodo get
        ! export const getPosts = async () => {
        !     try{
        !         return await apiClient.post('/posts')
        !     }catch(e){
        !         return{
        !             error: true,
        !             e: e
        !         }
        !     }
        ! }
        
        * export const getPosts = async () => {
        *     try{
        *         return await apiClient.get('/posts')
        *     }catch(e){
        *         return{
        *             error: true,
        *             e: e
        *         }
        *     }
        * }
    )

    ? src/hooks/usePostByName(
        Todo: El fetch se quedaba acivo y por eso aparecia que estaba cargando 
        ! return {
        !     post,
        !     isFetching: post,
        ! };

        * return {
        *     post,
        *     isFetching: !post,
        * };
    )

    ? src/components/AddCommentForm.jsx(
        Todo: Se estaba usando un event target en lugar de un preventDefault
        ! const handleSubmit = async (event) => {
        ! 
        !     event.target();
        !     const response = await submitComment();
        !     if(!response.error){
        !     reset();
        !     setFormState({name: "", text:""})
        !     onCommentAdded();
        !     }
        ! };
        
        * const handleSubmit = async (event) => {
        * 
        *     event.preventDefault();
        *     const response = await submitComment();
        *     if(!response.error){
        *     reset();
        *     setFormState({name: "", text:""})
        *     onCommentAdded();
        *     }
        * };
    )
}
*/
