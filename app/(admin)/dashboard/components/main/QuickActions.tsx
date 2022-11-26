import QuickAction from './QuickAction';
import QuickLink from './QuickLink';

const QuickActions = () => {
  return (
    <section className='flex flex-col gap-y-3'>
      <h3 className='uppercase text-gray-400'>Szybkie akcje</h3>
      <div className='w-full h-14 overflow-hidden relative'>
        <div className='flex absolute left-0 top-0 w-full pb-3 overflow-x-scroll whitespace-nowrap gap-4'>
          <QuickAction name='Odwiedź stronę' />
          <QuickAction name='Dodaj wpis' />
          <QuickAction name='Stwórz użytkownika' />
          <QuickAction name='Zmień ustawienia strony' />
          <QuickLink href='/dashboard/articles' name='Wyświetl artykuły' />
          <QuickLink href='/dashboard/comments' name='Wyświetl komentarze' />
        </div>
      </div>
    </section>
  );
};

export default QuickActions;
