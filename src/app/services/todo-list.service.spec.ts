import { TestBed } from '@angular/core/testing';

import { TodoListService } from './todo-list.service';

describe('TodoListService', () => {
  let service: TodoListService;
  let foo = 0;

  //Antes de cada teste
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoListService]
    });
    service = TestBed.inject(TodoListService);
    //foo += 1;

  });

  //Depois de cada teste
  afterEach(() => {
    foo += 1;

  })

  //Antes de todos os testes
  beforeAll(() => {
    foo = 4;

  })

  //Depois de todos os testes
  afterAll(() => {
    foo = 9;

  })

  //Verifica se o service foi criado com sucesso
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //verifica se as tasks estão sendo inseridas corretamente
  it('Deve adicionar uma tarefa', () => {
    let task: string = 'Tarefa de teste';

    service.addTask(task);
    expect(service.getTasks()).toContain(task);
  })

  //Verifica de a tarefa está sendo removida
  it('Deve remover uma tarefa', () => {
    let task: string = 'Tarefa';
    service.removeTask(task);
    expect(service.getTasks()).not.toContain(task);
  })

  //Verifica se as tarefas estão sendo retornadas
  it('Deve retornar tarefas inseridas', () => {
    service.addTask('Tarefa de teste 01');
    service.addTask('Tarefa de teste 02');

    expect(2).toEqual(service.getTasks().length);
  })

  //Caso positivo
  it('Tem um caso positivo', () => {
    let a = true;
    expect(a).toBe(true)
  })

  //Caso negativo
  it('Pode ter um caso negativo', () => {
    let a = false;
    expect(a).not.toBe(true);
  })
});

//A função FAIL força uma falha e pode ser passado uma mensagem de falha ou um objeto
describe('Testar a função FAIL', () => {
  function foo(x: boolean, callback: Function) {
    if(x) {
      callback();
    }
  };

  it('Não deve chamar o callback', () => {
    foo(true, () => {
      fail("O callback foi chamado");
    });
  });
})

describe('Teste de subniveis', () => {
  let foo: number;

  beforeEach(() => {
    foo = 0;
    foo += 1;
  });

  afterEach(() => {
    foo = 0;
  });

  it('foo deve ser igual a 1', () => {
    expect(foo).toEqual(1);
  });

  it('Pode ter mais de uma expectativa', () => {
    expect(foo).toBe(1);
    expect(true).toEqual(true);
  });

  describe('Próximo nível dentro do primeiro describe', () => {
    let bar: number;

    beforeEach(() => {
      bar = 1;
    });

    it('Pode utilizar os dois escopos', () => {
      expect(bar).toEqual(foo);
    })
  })
})


