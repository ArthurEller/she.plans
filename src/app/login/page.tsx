export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex h-screen w-full justify-between">
        <div className="bg-peach-whisper-100 flex w-2/4 flex-col items-center justify-center ">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col text-left">
              <p className="ml-1">Seja bem vindo ao</p>
              <h1 className="text-6xl">sheplans.</h1>
            </div>

            <div className="flex-col">
              <form>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="email">E-mail</label>
                    <input
                      className="border-2 border-black"
                      type="email"
                      name="email"
                      id="email"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="password">Senha</label>
                    <input
                      className="border-2 border-black"
                      type="password"
                      name="password"
                      id="password"
                    />
                  </div>
                  <button className="w-full bg-black text-white">Entrar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className=" bg-rosy-blush-100 flex w-2/4 flex-col items-center justify-center" />
      </div>
    </main>
  );
}
