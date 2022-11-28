import PostDataForm from './components/PostDataForm';

const NewPost = () => {
  return (
    <div className='text-black'>
      <h2 className='col-span-full text-xl font-medium justify-self-start mb-4 text-white'>Utwórz nowy post</h2>

      <PostDataForm />
    </div>
  );
};

export default NewPost;
