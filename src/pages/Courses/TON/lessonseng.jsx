import { Title, List, Button, Text } from "@telegram-apps/telegram-ui";

export const Lesson1_1 = () => {
  return (
    <List>
      <Title weight="7">1.1 Overview of the TON Ecosystem</Title>

      <Title>Dear Participants!</Title>

      <Title>
        Welcome to our TON blockchain development course — an exciting journey
        into the world of advanced technologies and decentralized applications.
      </Title>

      <Title>
        We are confident that successfully completing this course will open not
        only new horizons but also opportunities provided by the TON ecosystem.
        Along the way, you'll face engaging tasks, challenges, and practical
        exercises that will help you deepen your understanding and master
        development skills.
      </Title>

      <Title>
        Remember, each completed task brings you closer to the coveted SBT
        certificate.
      </Title>

      <Title weight="7">Requirements for obtaining it:</Title>
      <ul>
        <li>
          Honestly complete all course lessons, solve the provided tasks and
          tests.
        </li>
        <li>
          Subscribe to our official Telegram channel:{" "}
          <a href="https://t.me/ton_insights_ru">TON Insights</a>
        </li>
      </ul>

      <Title>We wish you inspiring learning and many projects! Let's go!</Title>

      <Title weight="4">💎 Welcome to the first part!</Title>

      <Title>
        In this part, you will explore the entire TON blockchain, its
        architecture, principles, and key components.
      </Title>
      <Title>
        One lesson will cover the blockchain structure and a detailed
        description of its internal processes. Another lesson will focus on the
        principles of blockchain networks in general and their evolution over
        three generations. Finally, we will delve into TON network contracts and
        tokens.
      </Title>
      <Title>
        By the end of this section, you will have a comprehensive understanding
        of the TON ecosystem and its components.
      </Title>

      <Title weight="4">📝 You will learn:</Title>
      <ul>
        <li>
          about custodial and non-custodial services and the differences between
          them;
        </li>
        <li>the differences between centralized and decentralized services;</li>
        <li>what can be created on the blockchain using smart contracts.</li>
      </ul>

      <div className="video-container">{/* Insert video as needed */}</div>

      <Title weight="4">📝 What you now know</Title>
      <ul>
        <li>How custodial wallets differ from non-custodial ones.</li>
        <li>
          The blockchain itself is a backend for decentralized applications.
        </li>
        <li>
          Everything in the blockchain essentially represents smart contracts
          (decentralized exchanges, tokens, domain names).
        </li>
      </ul>

      <Title weight="4">📚 Lesson Summary</Title>
      <Title>
        In this section, we discuss the overall architecture, construction
        principles, and other essential components of the TON platform.
      </Title>

      <Title style={{ marginTop: 12 }}>What is TON?</Title>
      <Title>
        TON is a platform for decentralized applications, bringing together
        users, validators, and app developers. It is more than just a
        blockchain. The TON blockchain brings together three groups:
      </Title>
      <ul>
        <li>users who own assets in TON;</li>
        <li>validators who manage network consensus;</li>
        <li>app developers who provide services based on the network.</li>
      </ul>

      <Title style={{ marginTop: 12 }}>
        Custodial and Non-custodial Services
      </Title>
      <Title>Applications and services are divided into two groups:</Title>
      <ul>
        <li>custodial,</li>
        <li>non-custodial.</li>
      </ul>

      <Title>
        <strong>Custodial services</strong> are managed by the same party
        responsible for the funds stored on these services.
      </Title>
      <Title>
        Online exchanges are usually custodial because they need to use funds
        from wallets to guarantee the promised exchange.
      </Title>
      <Title>
        <strong>
          This is why online exchanges represent a risk, as attackers could hack
          them and steal funds without recovery options.
        </strong>
      </Title>

      <Title>
        <strong>Non-custodial services</strong> are services that do not hold
        user funds and leave them entirely under the owner's control.
      </Title>
      <Title>
        <strong>
          Since all funds remain with users, hacking systems becomes more
          challenging.
        </strong>
      </Title>

      <Title style={{ marginTop: 12 }}>
        Centralized and Decentralized Applications
      </Title>
      <Title>Applications can be:</Title>
      <ul>
        <li>centralized,</li>
        <li>decentralized.</li>
      </ul>

      <Title>
        <strong>✨ Centralized applications</strong> are applications running on
        a server. <strong>Decentralized applications</strong> do not require a
        server and run directly on a blockchain smart contract.
      </Title>

      <Title style={{ marginTop: 12 }}>
        What can be created on the blockchain
      </Title>
      <Title>
        A wide variety of tools and services can be created with the blockchain.
      </Title>
      <Title>Smart contracts form the foundation of:</Title>
      <ul>
        <li>decentralized exchanges;</li>
        <li>tokens:</li>
        <ul>
          <li>currencies,</li>
          <li>collectibles,</li>
          <li>utility tokens;</li>
        </ul>
        <li>auctions,</li>
        <li>domain names.</li>
      </ul>

      <Title style={{ marginTop: 12 }}>Conclusion</Title>
      <Title>
        The TON ecosystem brings together wallets, exchanges, traders, and users
        interacting through smart contracts. This course focuses on authorized
        smart contracts, deploying them in TON, developing additional features,
        and interaction between centralized and decentralized applications.
      </Title>
    </List>
  );
};

export const Lesson1_2 = () => {
  return (
    <div>
      <Title weight="7">1.1 Overview of the TON Ecosystem</Title>

      <Title weight="4">What you now know:</Title>
      <ul>
        <li>
          <strong>TON</strong> is a state registry, a broader concept than a
          transaction ledger.
        </li>
        <li>
          In the TON blockchain, you cannot instantly access the state of
          another contract. This is possible only through messages, as TON is an
          asynchronous system.
        </li>
        <li>
          The TON network ensures message delivery, but not the delivery time.
        </li>
        <li>Each contract has its own micro-blockchain.</li>
        <li>
          The validator consensus ensures messages are delivered, do not
          duplicate, and double spending is prevented.
        </li>
      </ul>
      <link></link>
      <Title weight="4">📚 Lesson Summary</Title>
      <Title weight="4">Blockchain and State Changes</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        The TON blockchain functions as a state registry of network accounts.
      </Title>
      <ul>
        <li>TON smart contracts can also be considered accounts.</li>
      </ul>

      <Title style={{ marginTop: 12 }}>What to know about accounts:</Title>
      <ul>
        <li>Accounts have their own storage;</li>
        <li>Accounts have unique addresses;</li>
        <li>Each account has its TON coin balance;</li>
        <li>Accounts store program code.</li>
      </ul>

      <Title style={{ fontSize: 16, marginTop: 4 }}>
        During their lifecycle, smart contracts provide nearly unlimited
        functionality. They can:
      </Title>
      <ul>
        <li>Change data, including contract source code;</li>
        <li>Transfer tokens;</li>
        <li>Send messages to other contracts.</li>
      </ul>

      <Title weight="4">
        However, TON implies some restrictions set by network architecture:
      </Title>
      <ul>
        <li>
          👀 Contracts cannot see any other objects in the network except
          themselves.
        </li>
        <li>🌐 TON smart contracts are like computers in a network.</li>
      </ul>

      <Title weight="4">Blockchain Guarantees</Title>
      <ul>
        <li>
          ✅ You can determine the address of any incoming message and be sure
          that it has trusted code behind it.
        </li>
        <li>
          ✅ The blockchain guarantees message delivery, but not the time it
          takes.
        </li>
        <li>
          ❌ A message chain can span multiple shards and require many blocks
          for finalization, so don't rely on a specific message delivery time.
        </li>
      </ul>

      <Title weight="4">Validator Consensus</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        Validators are responsible for message delivery.
      </Title>
      <ul>
        <li>
          Validators prevent message duplication, double spending, and ensure
          transaction transparency.
        </li>
      </ul>

      <video controls playsInline>
        <source src="https://cdn.stepik.net/video/326892/1080/785d605452771a25b78dc7eb9a2480e4.mp4" />
      </video>
    </div>
  );
};
export const Lesson1_3 = () => {
  return (
    <div>
      <Title weight="7">1.3 Principles of Blockchain Operation</Title>

      <Title weight="7">📝 You will learn:</Title>
      <ul>
        <li>
          how Bitcoin and Ethereum are designed, and their key differences from
          TON;
        </li>
        <li>the problem Bitcoin and Ethereum aim to solve;</li>
        <li>the drawbacks of Ethereum and Bitcoin;</li>
        <li>
          the fundamental principle of the TON blockchain that distinguishes it
          from Bitcoin and Ethereum.
        </li>
      </ul>

      <Title weight="7">📝 What you now know</Title>
      <ul>
        <li>
          The entire Bitcoin state is essentially a list of accounts that have
          not yet spent their balance.
        </li>
        <li>
          Ethereum seeks to develop the concept of Bitcoin and make it more
          accessible to developers.
        </li>
        <li>
          Ethereum started with the idea that an account could include not only
          logical values but also an arbitrary internal storage.
        </li>
        <li>
          Ethereum accounts can interact with each other and send synchronous
          messages, similar to how functions are called in applications.
        </li>
        <li>
          The Ethereum model is highly flexible and developer-friendly but not
          scalable, as both developers and all their contracts are stored in the
          network's shared state.
        </li>
        <li>
          TON contracts cannot see the network's global state, only their own,
          and the only way they can interact with other contracts is through
          asynchronous messages.
        </li>
        <li>
          TON contracts can be sharded, whereas in Bitcoin, all contract states
          are kept in a single storage of unspent balances.
        </li>
        <li>
          TON provides unlimited flexibility and scalability, though at the cost
          of some developer convenience.
        </li>
      </ul>

      <Title weight="7">📚 Lesson Summary</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        This lesson explores the evolution of blockchain networks through three
        generations — Bitcoin, Ethereum, and TON.
      </Title>

      <Title weight="4">Bitcoin</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        Bitcoin is essentially the first well-known blockchain, designed for
        digital currency transfers protected from regulators. Bitcoin uses an
        account ledger, identified by unique public keys, to facilitate coin
        transfers. Transactions are authorized with cryptographic signatures.
        The Bitcoin concept includes transactions with multiple senders and
        recipients, along with Proof-of-Work consensus. It supports a scripting
        language for complex transaction control, though it is limited in
        scalability. To protect privacy, Bitcoin allows for new accounts to be
        created for transfers.
      </Title>

      <Title weight="4">Ethereum</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        Ethereum represents the second generation of blockchain, introducing
        composable contracts and a flexible account structure. At this stage,
        users could perform arbitrary operations on the blockchain by paying for
        execution, thus creating decentralized finance. However, the
        architectural features that offer Ethereum’s rich functionality also
        limit the network's scalability.
      </Title>
      <ul>
        <li>
          Ethereum seeks to advance Bitcoin's concept, making it more flexible
          for developers.
        </li>
        <li>
          Any account in Ethereum can include not only logical values but also
          arbitrary internal storage;
        </li>
        <li>
          Network changes are no longer just transfers from one account to
          another.
        </li>
        <li>
          Accounts can interact with each other and send synchronous messages,
          similar to function calls in applications. Ethereum’s principles are
          compatible with many known programming tools and concepts.
        </li>
      </ul>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        ❗ Ethereum’s architecture provides vast possibilities for developers,
        but it is not scalable, as both the developer and all their contracts
        are stored in the network's shared state.
      </Title>

      <Title weight="4">TON</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        TON is the third generation of blockchain, introducing limitations to
        ensure scalability. TON contracts have a limited field of view and
        interact through messages, enabling scalability. Proof-of-Stake
        consensus replaces Proof-of-Work, allowing for validator groups and
        efficient message distribution. TON has precise operation cost control,
        with fees for execution, data storage, and message routing, ensuring
        scalability and reducing denial-of-service risks.
      </Title>

      <ul>
        <li>
          The core idea of TON is to provide developers with unlimited
          flexibility and scalability.
        </li>
        <li>
          TON contracts do not have access to the global state, only their own
          state.
        </li>
        <li>
          The only way for contracts to interact with each other is by sending
          asynchronous messages.
        </li>
        <li>
          Each time a transaction is executed within a contract, it is entirely
          independent of any transaction in another contract, allowing them to
          be executed in any order or independently.
        </li>
        <li>
          In TON, all contracts can be sharded, interacting with each other
          through messages, with the network responsible for message routing.
        </li>
      </ul>

      <Title weight="7">Conclusion</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        Blockchain has evolved from Bitcoin's simple yet crucial model to
        Ethereum's functional model, which faced scalability issues. The third
        generation, TON, addresses these issues through new limitations,
        scalability features, and precise cost assessments within the network.
        This approach enables unlimited scalability while maintaining security
        and operational efficiency within the network.
      </Title>
    </div>
  );
};
export const Lesson1_4 = () => {
  return (
    <div>
      <Title weight="7">Lesson 1.4: Account and Contract Concepts</Title>

      <Title style={{ fontSize: 16, marginTop: 4 }}>
        <strong>What you will learn:</strong>
      </Title>
      <ul>
        <li>Important features of contracts in TON;</li>
        <li>How unlimited scalability is achieved in TON;</li>
        <li>What can be done with contracts;</li>
        <li>How TON is protected from denial-of-service attacks;</li>
        <li>Important considerations when creating smart contracts.</li>
      </ul>

      <Title style={{ fontSize: 16, marginTop: 4 }}>
        <strong>What you now know:</strong>
      </Title>
      <ul>
        <li>
          A contract’s address is a cryptographic hash of its initial data and
          code.
        </li>
        <li>
          A contract’s data is encapsulated, and it only sees its own storage
          and balance.
        </li>
        <li>Tokens in TON are separate contracts with their own state.</li>
        <li>TON charges fees for contract data and its storage rental.</li>
      </ul>

      <Title style={{ fontSize: 16, marginTop: 4 }}>
        <strong>Key considerations in smart contract development:</strong>
      </Title>
      <ul>
        <li>The gas cost for contract execution.</li>
        <li>The rental fee throughout the contract’s lifecycle.</li>
      </ul>

      <Title weight="7">What can be created with contracts:</Title>
      <ul>
        <li>User account contracts.</li>
        <li>Multi-signature contracts.</li>
        <li>
          Tokens and their properties (e.g., ownership and other parameters).
        </li>
      </ul>

      <Title weight="7">How to protect TON:</Title>
      <ul>
        <li>
          Execution and data rental fees help prevent denial-of-service attacks.
        </li>
        <li>Gas fees depend on the execution time of instructions.</li>
      </ul>

      <Title weight="7">Frozen Contracts:</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        If a contract cannot pay its rental fees, it is frozen, and its data is
        replaced with a hash of the last state.
      </Title>
    </div>
  );
};

export const Lesson1_5 = () => {
  return (
    <div>
      <Title weight="7">Lesson 1.5: Tokens, Currencies, DNS, etc.</Title>

      <Title style={{ fontSize: 16, marginTop: 4 }}>
        <strong>What you will learn:</strong>
      </Title>
      <ul>
        <li>How to create custom assets on the TON platform;</li>
        <li>Types of tokens in TON: fungible and non-fungible;</li>
        <li>How tokenization works;</li>
        <li>How tokens scale in TON;</li>
        <li>
          How essential tokens perform functions in the TON network, such as DNS
          records and usernames.
        </li>
      </ul>

      <Title weight="7">What are assets:</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        Assets in TON are any valuable items you want to add to your
        application, such as:
      </Title>
      <ul>
        <li>Currencies</li>
        <li>Stablecoins</li>
        <li>Checks</li>
        <li>Tickets and permits</li>
        <li>Financial contracts</li>
      </ul>

      <Title weight="7">Tokenization</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        Tokenization is the process of distributing a system's total value as a
        set of transferable tokens.
      </Title>

      <Title weight="7">Types of Tokens in TON</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>Tokens can be:</Title>
      <ul>
        <li>
          <strong>Fungible</strong>: currencies, cryptocurrencies, ownership
          shares, voting rights.
        </li>
        <li>
          <strong>Non-Fungible (NFT)</strong>: unique and indivisible, such as
          DNS records and usernames in Telegram.
        </li>
      </ul>

      <Title weight="7">Token Scalability</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        Token scalability means that transfer operations between users do not
        affect transfers between other users in the network. This enables the
        creation of infinitely scalable tokens without limitations.
      </Title>
      <video controls playsInline>
        <source src="https://cdn.stepik.net/video/326895/1080/32605e586e7f267ca655e087bb683ce9.mp4" />
      </video>

      <Title weight="7">Conclusion</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        Thus, fungible and non-fungible tokens allow you to implement any type
        of assets that can be sent directly to users. This is an essential
        building block for application developers in the TON network, ensuring
        scalability and system functionality.
      </Title>
    </div>
  );
};
export const Lesson2_1 = () => {
  return (
    <div>
      <Title weight="7">2.1 TVM and Memory Operation</Title>

      <Title style={{ fontSize: 16, marginTop: 4 }}>
        <strong>💎 Welcome to the second part!</strong>
      </Title>

      <Title style={{ fontSize: 16, marginTop: 4 }}>
        In this section, we will cover several topics. We'll briefly review how
        memory works and discuss the implementation of the TON Virtual Machine
        (TVM). We’ll delve into message processing and examine how transactions
        actually work. Additionally, we'll discuss the importance of message
        authentication within smart contracts. We’ll look at the current fees in
        TON and explore how smart contract design principles can be used in
        various applications. Finally, we'll discuss how the TON platform
        ensures the security and scalability of applications built on it.
      </Title>

      <Title style={{ fontSize: 16, marginTop: 4 }}>
        <strong>📝 You will learn:</strong>
      </Title>
      <ul>
        <li>what a cell is in TON;</li>
        <li>why this architecture was chosen for TON;</li>
        <li>how to store lists, dictionaries, and data sets in the system.</li>
      </ul>

      <Title style={{ fontSize: 16, marginTop: 4 }}>
        <strong>📝 What you now know:</strong>
      </Title>

      <Title style={{ fontSize: 16, marginTop: 4 }}>
        An interesting feature of TON is that all data structures across the
        network, including in your smart contracts and standard data structures,
        are built on cells.
      </Title>

      <Title style={{ fontSize: 16, marginTop: 4 }}>
        A cell is the building block for all data structures in the TON
        blockchain. Each cell contains up to 1023 bits of data and up to 4 links
        to other cells. This allows cells to be used to create complex and
        multi-level data structures.
      </Title>

      <Title style={{ fontSize: 16, marginTop: 4 }}>
        When a contract receives a message, a validating node creates an
        instance of TVM—a special stack-based virtual machine designed to
        execute TON bytecode. The current state and contract code are loaded
        into the virtual machine and stored in cells. It then sequentially
        executes the code, verifies all network rules (including gas costs), and
        either replaces the contract state with a new one or returns an error.
      </Title>

      <Title style={{ fontSize: 16, marginTop: 4 }}>
        The secret to TON's scalability is limiting the amount of work done on
        any individual part of the network. TON scales across all contracts, but
        each individual contract cannot scale beyond its container.
      </Title>

      <Title weight="7">📚 Lesson Summary</Title>

      <Title style={{ fontSize: 16, marginTop: 4 }}>
        In this lesson, we will learn about how memory and the TON Virtual
        Machine operate.
      </Title>

      <Title weight="4">
        🏁 Let’s start with TON’s unique entity—the cell.
      </Title>
      <Title weight="4">Cells</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        <strong>What are cells?</strong>
      </Title>

      <Title style={{ fontSize: 16, marginTop: 4 }}>
        🔶 Cells are small building blocks from which all data structures in the
        TON blockchain are built. Each cell includes up to 1023 bits of data 🔸
        and up to 4 links 🔗 to other cells. This enables the use of cells to
        create complex and multi-level data structures.
      </Title>

      <Title style={{ fontSize: 16, marginTop: 4 }}>
        ❗ Thus, in TON, it is impossible to allocate a memory array of
        arbitrary size, as in Ethereum. In TON, you have to work with a tree of
        cells 🌳.
      </Title>

      <Title weight="4">Data Model in TON</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        The data model in TON creates certain challenges for developers, as data
        needs to be split into fragments of 1023 bits, which is slightly less
        than 128 bytes. ❓ You must plan how flat or deep your data structure
        needs to be.
      </Title>

      <Title weight="4">Why Cells?</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        ❗ The advantage of this structure is that the entire blockchain state
        can be combined into a binary tree (Merkle tree), allowing for Merkle
        proof—a cryptographic proof of the authenticity of any piece of data in
        the blockchain at any state.
      </Title>

      <Title style={{ fontSize: 16, marginTop: 4 }}>
        This is critical because when you scale a large system 🌐 with numerous
        shards and groups of validators, you need to verify the correctness of
        the behavior of individual groups, proving that they haven't violated
        system rules. This is where compact and efficient Merkle proofs come in
        handy, allowing any system participant's misbehavior to be identified.
      </Title>

      <Title weight="4">Other Data Types in TVM</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        The TON Virtual Machine supports several types of data:
      </Title>
      <ul>
        <li>cells,</li>
        <li>integers,</li>
        <li>
          257-bit integers (allowing a wide range of integers for cryptographic
          and financial operations 😎).
        </li>
      </ul>

      <Title style={{ fontSize: 16, marginTop: 4 }}>
        All data types used by TVM can be read by the contract’s code from its
        own storage, processed as an array, and a new secure storage can be
        created. If the execution is successful ✔️, the TVM instance is unloaded
        from memory, and the contract's new state is saved in place of the old
        one.
      </Title>

      <Title weight="4">Memory Operation</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        Let’s look at how a contract interacts with memory.
      </Title>

      <Title style={{ fontSize: 16, marginTop: 4 }}>
        The only available option here is a tree of memory cells within the
        contract.
      </Title>

      <Title weight="4">What to Consider?</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        Creating multi-level cells for small amounts of data is fine. If you’re
        creating a system with a small number of participants—such as a
        multi-signature contract—you can store this data directly in the
        contract’s hash table, as the data size will be quite small. However, if
        you are creating a system with millions of users, you should consider
        tokens that validate users' participation in the system and avoid
        storing the entire list of users within the contract.
      </Title>

      <Title weight="4">Conclusion</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        Here’s what we’ve covered by the end of the lesson.
      </Title>

      <ul>
        <li>Everything is built from 🔸 cells.</li>
        <li>
          On top of the cells, we have types supported by the TON Virtual
          Machine (TVM) 💻.
        </li>
        <li>
          A new instance of TVM is created for each contract and each message
          that the 📝 contract processes.
        </li>
        <li>
          It’s important to remember the 💠 costs associated with large data
          structures and multi-level cell chains, which can lead to increased
          contract execution costs.
        </li>
      </ul>
    </div>
  );
};

export const Lesson2_2 = () => {
  return (
    <div>
      <Title weight="7">2.2 Message Types and Transaction Stages</Title>

      <Title weight="7">📝 You will learn:</Title>
      <ul>
        <li>the types of messages a contract can receive;</li>
        <li>what a transaction is;</li>
        <li>what the stages of a transaction are.</li>
      </ul>

      <Title weight="7">📝 What you now know</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        A contract can receive two types of messages—external and internal.
      </Title>

      <Title weight="4">External Messages</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        An external message is a string of data that, from the blockchain's
        perspective, appears to come from nowhere. Such a message does not have
        an 🆔 sender attached to it. No TON 💎 tokens are linked to it. These
        messages can contain anything the contract author desires.
      </Title>

      <Title style={{ fontSize: 16, marginTop: 4 }}>
        ❗ It is the responsibility of the receiving contract to interpret and
        apply these data to its code.
      </Title>

      <Title weight="4">Internal Messages</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        An internal message is a message that originates from another contract
        on the blockchain. It has a clear 🆔 sender, and usually, a small amount
        of TON tokens are attached.
      </Title>
    </div>
  );
};
export const Lesson2_3 = () => {
  return (
    <div>
      <Title weight="7">2.3 Message Authorization in Contracts</Title>

      <section>
        <Title weight="7">📝 What you will learn:</Title>
        <ul>
          <li>What types of authentication exist in the TON blockchain?</li>
        </ul>
      </section>

      <section>
        <Title weight="7">📝 What you now know</Title>
        <Title style={{ fontSize: 16, marginTop: 4 }}>
          The first type of authentication is signature-based authentication.
          For example, when an external message is received, the wallet reads
          the first part of the data, verifies the signature, and then processes
          the rest of the message.
        </Title>
        <Title style={{ fontSize: 16, marginTop: 4 }}>
          The second mechanism is sender authentication. All internal messages
          in TON are identified by the sender of the message. The correctness
          and security of this identification are guaranteed by the TON
          protocol. Therefore, every time a contract receives an internal
          message, it knows exactly which other contract sent it.
        </Title>
        <Title style={{ fontSize: 16, marginTop: 4 }}>
          The third method is authentication based on the message sender.
          Addresses in the TON ecosystem are not only unique identifiers of
          contracts but also cryptographically protected hashes of the
          contract’s source code and data. Therefore, the addresses do not
          change when the contract data changes. Since these addresses are
          cryptographic commitments to the code itself, they can be used to
          verify the sender's code.
        </Title>
        <Title style={{ fontSize: 16, marginTop: 4 }}>
          The fourth type is worth mentioning too — the absence of
          authentication altogether. This important pattern becomes relevant
          when you are building truly decentralized applications.
        </Title>
      </section>

      <section>
        <Title weight="7">📚 Lesson Summary</Title>
        <Title weight="4">Overview of All Authentication Types</Title>

        <Title weight="4">Signature-Based Authentication</Title>
        <Title style={{ fontSize: 16, marginTop: 4 }}>
          ❗ Any event in the TON blockchain must begin with an external
          message. When an external message arrives at the wallet, it reads 64
          bytes of data 6️⃣4️⃣, which are the signature for the rest of the
          message. The wallet then verifies the signature with its public key
          and processes the remaining part of the message as instructions for
          sending messages to other contracts on the blockchain.
        </Title>

        <Title weight="4">Sender Authentication</Title>
        <Title style={{ fontSize: 16, marginTop: 4 }}>
          All internal messages in TON are identified by the sender of the
          message. The correctness and security 🔓 at this stage are guaranteed
          by the TON protocol itself. Each time a contract receives an internal
          message, it knows exactly which contract it came from. This is a much
          cheaper and more powerful option compared to signature verification.
        </Title>

        <Title weight="4">Sender Code Verification</Title>
        <Title style={{ fontSize: 16, marginTop: 4 }}>
          Addresses in the TON ecosystem are not just unique identifiers of
          contracts, but also cryptographically protected hashes of the
          contract's source code and data. Therefore, addresses do not change
          when the contract data changes. Since these addresses are
          cryptographic commitments to the code itself, they can be used to
          verify the sender's message code.
        </Title>

        <Title weight="4">Lack of Authentication to Avoid Limitations</Title>
        <Title style={{ fontSize: 16, marginTop: 4 }}>
          ❓ Is it unsafe to not verify the authenticity of messages? In some
          situations, security lies precisely in this — if you are working with
          a system that needs to be resistant to limitations, such as a
          decentralized staking pool.
        </Title>
      </section>
    </div>
  );
};
export const Lesson2_5 = () => {
  return (
    <div>
      <Title weight="7">2.5 Scalable Contracts</Title>
      <Title weight="4">📝 What you will learn</Title>
      <ul>
        <li>
          What does unlimited horizontal scalability really mean, and how can
          you make the most of it for your applications?
        </li>
        <li>
          What principles will help you get the most out of the scalability of
          the TON blockchain?
        </li>
      </ul>

      <Title weight="4">📝 What you now know</Title>
      <ul>
        <li>
          TON guarantees scalability up to the level of individual contracts.
        </li>
        <li>
          Monolithic Ethereum wallet contracts on the TON blockchain must be
          implemented differently — for speed, scalability, and gas savings.
        </li>
        <li>First of all, avoid variable-length data.</li>
        <li>
          If you need to add a list, at least make it short and limited — for
          example, fixed in size.
        </li>
        <li>
          The TON DNS domain name is a collectible non-fungible token, which can
          include an unlimited number of additional records associated with it.
        </li>
        <li>
          A scalable way to create large lists and data dictionaries in TON is
          to use the blockchain itself as an array.
        </li>
        <li>
          Tokens in TON are structured so that there is a single miner contract,
          but it does not store a list of all its users. Instead, it has the
          right to mine and create tokens for other users. Balances of
          individual users are stored in so-called Jetton wallets.
        </li>
      </ul>

      <Title weight="4">📚 Lesson Summary</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        Let’s talk about scalability.
      </Title>
      <ul>
        <li>
          💎 In TON, you have a clear guarantee of scalability. TON guarantees
          that it can scale up to individual contracts. Therefore, operations on
          one contract will not create a "bottleneck" 🍼 for operations on
          another contract. The TON network will take care of message routing 🚅
          between them.
        </li>
        <li>
          ❗ Your task is to take full advantage of blockchain scalability and
          avoid creating bottlenecks in your contracts!
        </li>
      </ul>

      <Title weight="4">Problems with Monolithic Contracts</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        One of the main issues for people coming to TON from traditional
        information systems, large web-based databases, or Ethereum is that they
        develop their contracts as monolithic applications with their own
        variable-length storage.
      </Title>
      <ul>
        <li>
          🌐 For example, in Ethereum, a token is implemented as a ledger with a
          single smart contract containing a list of accounts. If you have a
          million users, this list will consist of a million rows. Each user
          will have an entry with their address and balance. Developing such
          contracts is simple and clear: you have atomic transactions, you
          subtract from one balance and add to another. This is very easy to
          design to see how the system will work. However, this model will not
          scale in TON. As soon as you put this long list into a single
          contract, you will immediately encounter problems
        </li>
        <li>
          1️⃣ The cost of renting data in the contract will constantly grow 💸
        </li>
        <li>
          2️⃣ For each operation with this contract, the user will have to pay
          more and more, as they will be working with an increasing amount of
          data in the contract 🌄
        </li>
      </ul>

      <Title weight="4">Rules</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        To properly design multi-user and large applications in TON, follow
        these rules.
      </Title>
      <ul>
        <li>❗ Avoid variable-length data.</li>
        <li>
          ❗ If you need to have a list, at least make it short and limited, for
          example, fixed in size.
        </li>
        <li>
          ❗ If you need to have a list that will dynamically increase, ensure
          that the contract belongs to one user and they have exclusive rights
          to manage its storage. A simple example of such a list is TON DNS
          records.
        </li>
      </ul>

      <Title weight="4">Blockchain as an Array</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        To create scalable large lists or data dictionaries in TON, it’s best to
        use the blockchain itself as an array. Here’s a simple example:
      </Title>
      <ul>
        <li>
          Imagine a system where you have several contracts linked 📌 to each
          other, where each user takes care of their own individual contract.
          Therefore, you don’t need to store the entire list inside your
          application.
        </li>
        <li>
          💎 The most popular example of implementing this idea is the design of
          tokens in the TON ecosystem. Balances of individual users are
          distributed across so-called Jetton wallets. 🔥 This is a great
          solution because operations between two Jetton wallets in one place do
          not interfere with operations between two other Jetton wallets
          elsewhere. They can be distributed across separate shardchains and not
          create bottlenecks.
        </li>
      </ul>
    </div>
  );
};

export const Lesson2_6 = () => {
  return (
    <div>
      <Title weight="7">2.6 Overview of Standard Business Problems</Title>

      <Title weight="4">📝 What you will learn</Title>
      <ul>
        <li>
          In which scenarios can we apply the principles of scalable contract
          design?
        </li>
      </ul>

      <Title weight="4">📝 What you now know</Title>
      <ul>
        <li>
          In TON, tokens are implemented as separate contracts: one contract for
          each user plus a separate miner contract that provides an interface
          for issuing new tokens.
        </li>
      </ul>

      <Title weight="4">📚 Lesson Summary</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        Here we will look at three examples to see how the principles of
        contract development apply to different applications and how the TON
        platform helps create scalable and secure applications.
      </Title>

      <Title weight="4">1. Tokens</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        In Ethereum or even in non-blockchain-based systems, tokens would be
        implemented as a simple account registry. You have a list of accounts
        managed by a program. Each item in the list includes the participant’s
        address and their balance. It’s quite simple, but unfortunately, it
        doesn’t scale on the blockchain, as your smart contract grows with the
        increasing number of users and becomes more expensive for each user.
      </Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        <strong>What is TON’s approach?</strong>
      </Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        In TON, tokens are implemented as separate contracts: one contract for
        each user plus a separate miner contract that provides an interface for
        issuing new tokens.
      </Title>

      <Title style={{ marginTop: 12 }}>
        User Contracts are called Jetton Wallets
      </Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        Their task is to store the token balance for their user. When a user
        wants to transfer tokens from their account to the recipient’s account,
        they send an external message to their wallet. The wallet opens the
        message and then sends an internal message to the same user’s Jetton
        wallet with instructions to send money to a specific address. This
        Jetton wallet reduces its balance by the required amount and sends a
        message to the recipient’s Jetton wallet, which has the same code but a
        different owner. The message contains instructions to increase the
        balance by the same amount, as the recipient's Jetton wallet does.
      </Title>

      <Title style={{ fontSize: 16, marginTop: 4 }}>
        This uses code verification, since the code for all Jetton wallets is
        the same.
      </Title>

      <Title weight="4">2. Multi-Signature Contract</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        The multi-signature contract concept is used when multiple parties
        authorize actions by tokenizing requests initiated by users.
      </Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        Instead of directly processing messages, users receive unique tokens
        that encapsulate their requests and votes. These tokens belong to the
        users, simplify tracking, and prevent attackers from overloading the
        contract. Honest users collect votes using temporary request tokens.
        Once a quorum is reached, the multi-signature contract verifies the
        authenticity of the request and performs the action. This tokenization
        simplifies the entire process, based on the system’s temporary state
        rather than individual shares in the contract or other values.
      </Title>

      <Title weight="4">3. Subscription Payment Model</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        Starting from version 4, wallets support plugins that enable
        subscription payments. This is a very powerful feature that scales
        relatively well because the user controls the list of plugins.
      </Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        However, one can imagine a better way to do this. A great idea is to
        list the specific implementations of the code of these plugins instead
        of the addresses of individual plugins. And if they use the same code,
        one record will be enough for any number of subscription plugins.
      </Title>
    </div>
  );
};
export const Lesson3_1 = () => {
  return (
    <div>
      <Title weight="7">3.1 The Life Cycle of Smart Contract Development</Title>

      <Title style={{ fontSize: 16, marginTop: 4 }}>
        💎 Welcome to the third part!
      </Title>

      <Title style={{ fontSize: 16, marginTop: 4 }}>
        In this chapter, we will look at different aspects of smart contract
        development. We’ll start by breaking down the entire cycle of developing
        a smart contract, including creating a local project that can be
        compiled into a smart contract. Additionally, we’ll learn to write code
        in FunC and check that our contract code works as expected. We’ll go
        over creating a custom deployment script to better understand the
        internal processes. Finally, we’ll discuss increasing deployment
        flexibility. Over the next six lessons, we’ll gain extensive knowledge
        and skills in smart contract development.
      </Title>

      <Title weight="4">📝 What you will learn:</Title>
      <ul>
        <li>What stages are involved in developing smart contracts in TON?</li>
        <li>
          What language is used to develop smart contracts in the TON
          blockchain?
        </li>
        <li>
          Are there standard local environments for writing, testing, and
          deploying smart contracts?
        </li>
      </ul>

      <Title weight="4">📝 What you now know:</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        We can imagine a TON contract as a satellite launched into Earth’s
        orbit. It flies around the Earth, interacts with other satellites, can
        receive information from Earth, process it, and send results back. But
        before launching this satellite, we must go through several stages with
        it.
      </Title>

      <ul>
        <li>
          At the first stage, we prepare the local environment that will allow
          our satellite to pass through all subsequent stages.
        </li>
        <li>
          In fact, a smart contract on the TON blockchain is stored and executed
          as binary code.
        </li>
        <li>
          At the second stage, we describe the commands that our smart contract
          can process.
        </li>
        <li>At the third stage, we write the code in FunC.</li>
        <li>At the fourth stage, we test our FunC code locally.</li>
        <li>At the fifth stage, we deploy our contract to the testnet.</li>
      </ul>

      <Title weight="4">📚 Lesson Summary</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        Introduction to Chapter 3
      </Title>

      <Title style={{ fontSize: 16, marginTop: 4 }}>
        In this chapter, we will move to practical work and break down the
        entire cycle of smart contract development in TON. We’ll go through each
        step together and, in the end, we’ll have a local environment for
        creating smart contracts, FunC code, tests for our contract, and
        finally, a deployed contract.
      </Title>

      <Title weight="4">Smart Contract in TON as a Satellite of Earth</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        This is the best analogy I could come up with to explain the life cycle
        of a TON smart contract: you can think of it as a satellite launched
        into Earth’s orbit.
      </Title>

      <ul>
        <li>
          There is a laboratory where the satellite is assembled (the local
          environment).
        </li>
        <li>
          There is a documented protocol that defines all the commands the
          satellite can process (TL-B scheme).
        </li>
        <li>
          Each behavior scenario is tested while the satellite is still in the
          lab (local tests).
        </li>
        <li>
          Then the satellite is launched into a simulated environment that
          closely resembles what it will experience in space (testnet and
          on-chain tests after deployment).
        </li>
        <li>
          How do we send our satellite into orbit? With rockets. The rockets
          deliver the satellite into orbit, leave it there, and fall back after
          successfully completing their mission (deployment to the mainnet).
        </li>
      </ul>

      <Title style={{ fontSize: 16, marginTop: 4 }}>
        From this moment, the satellite begins its independent life in space,
        where it works with everything you programmed into it.
      </Title>

      <Title weight="4">
        Explaining the Satellite Analogy in Smart Contracts on TON
      </Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        When we write a smart contract, we go through a similar cycle.
      </Title>

      <ol>
        <li>
          Prepare the local environment that will allow us to guide our
          satellite/smart contract through all the stages mentioned above.
        </li>
        <li>
          Use the TL-B scheme to describe the commands that our smart contract
          should process.
        </li>
        <li>The most enjoyable part: writing code in FunC.</li>
        <li>Test the FunC code locally.</li>
        <li>Deploy the code to the testnet.</li>
        <li>Launch: Deploy the code to the mainnet.</li>
      </ol>

      <Title weight="4">
        Are there standard local environments for writing, testing, and
        deploying smart contracts?
      </Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        That’s a good question. Programming tools for TON are evolving quickly,
        and sometimes it doesn’t make sense to create your own local
        environment. There is an excellent tool developed by the TonTech team
        and officially supported by the TON Foundation — Blueprint.
      </Title>

      <Title style={{ fontSize: 16, marginTop: 4 }}>
        To use it, simply run the following command locally:
      </Title>

      <pre>npm create ton@latest</pre>

      <Title style={{ fontSize: 16, marginTop: 4 }}>
        This will create a new project with the code for all the stages
        described above. You can read more about it in the Blueprint
        documentation. However, in this course, we will still create our own
        project to better understand how all the processes work.
      </Title>

      <Title style={{ fontSize: 16, marginTop: 4 }}>Let’s begin!</Title>
    </div>
  );
};
export const Lesson3_2 = () => {
  return (
    <div>
      <Title weight="7">3.2 Setting Up the Compilation Process</Title>

      <Title weight="4">📚 Lesson Summary</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        The goal of this lesson is to create a local project that will compile
        into our smart contract. We won’t be writing in FunC just yet, but we
        will prepare our "laboratory". This part can be used in all your future
        projects.
      </Title>

      <Title style={{ fontSize: 16, marginTop: 4 }}>
        To begin, make sure you have three things:
      </Title>
      <ul>
        <li>
          Node.js (version 16.15.0 or newer). Installation instructions are{" "}
          <a
            href="https://nodejs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          . To check if it's installed, enter <code>node -v</code> in the
          terminal.
        </li>
        <li>
          Package manager. It will likely be installed with Node.js, but check
          just in case. In this lesson, we will use Yarn, but you can use any
          other (e.g., npm).
        </li>
        <li>
          A good IDE with support for FunC and TypeScript. We recommend Visual
          Studio Code with the FunC plugin. If you are using IntelliJ, here is a
          link to the{" "}
          <a
            href="https://plugins.jetbrains.com/plugin/xyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            FunC plugin
          </a>{" "}
          for it.
        </li>
      </ul>

      <video controls playsInline>
        <source src="https://cdn.stepik.net/video/326903/1080/5dc2efdb6283f4ed74949e73f1fe4aa4.mp4" />
      </video>
      <Title weight="4">Project Setup</Title>
      <ol>
        <li>
          Create your project folder:
          <pre>
            <code>mkdir my_first_contract && cd my_first_contract</code>
          </pre>
        </li>
        <li>
          Create a <code>package.json</code> file using the package manager:
          <pre>
            <code>yarn init</code>
          </pre>
          <Title style={{ fontSize: 16, marginTop: 4 }}>
            As a result, the <code>package.json</code> file will look like this:
          </Title>
          <pre>
            <code>{`{
    "name": "my_first_contract",
    "version": "1.0.0",
    "license": "MIT"
  }`}</code>
          </pre>
        </li>
        <li>
          Install the libraries for TypeScript:
          <pre>
            <code>yarn add typescript ts-node @types/node @swc/core --dev</code>
          </pre>
        </li>
        <li>
          Create a <code>tsconfig.json</code> file and add the configuration:
          <pre>
            <code>{`{
    "compilerOptions": {
      "target": "es2020",
      "module": "commonjs",
      "esModuleInterop": true,
      "forceConsistentCasingInFileNames": true,
      "strict": true,
      "skipLibCheck": true,
      "resolveJsonModule": true
    },
    "ts-node": {
      "transpileOnly": true,
      "transpiler": "ts-node/transpilers/swc"
    }
  }`}</code>
          </pre>
        </li>
        <li>
          Install the libraries for TON:
          <pre>
            <code>
              yarn add @ton/core @ton/crypto @ton-community/func-js --dev
            </code>
          </pre>
        </li>
      </ol>

      <Title weight="4">FunC Code Example</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        Let’s create a minimal project with FunC code:
      </Title>
      <pre>
        <code>{`mkdir contracts && cd contracts && touch main.fc`}</code>
      </pre>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        In the <code>main.fc</code> file, add:
      </Title>
      <pre>
        <code>{`() recv_internal(int msg_value, cell in_msg, slice in_msg_body) impure {}`}</code>
      </pre>

      <Title weight="4">Writing the Compilation Script</Title>
      <ol>
        <li>
          Create a <code>scripts</code> folder and a <code>compile.ts</code>{" "}
          file:
          <pre>
            <code>{`mkdir scripts && cd scripts && touch compile.ts`}</code>
          </pre>
        </li>
        <li>
          Add the compilation script:
          <pre>
            <code>{`import * as fs from "fs";
  import process from "process";
  import { Cell } from "@ton/core";
  import { compileFunc } from "@ton-community/func-js";
  
  async function compileScript() {
    export const compileResult = await compileFunc({
      targets: ["./contracts/main.fc"],
      sources: (x) => fs.readFileSync(x).toString("utf8"),
    });
  
    if (compileResult.status === "error") {
      process.exit(1);
    }
  
    fs.writeFileSync("build/main.compiled.json", JSON.stringify({
      hex: Cell.fromBoc(Buffer.from(compileResult.codeBoc, "base64"))[0]
        .toBoc()
        .toString("hex"),
    }));
  }
  compileScript();`}</code>
          </pre>
        </li>
        <li>
          To easily run the script, add it to <code>package.json</code>:
          <pre>
            <code>{`"scripts": {
    "compile": "ts-node ./scripts/compile.ts"
  }`}</code>
          </pre>
        </li>
      </ol>

      <Title weight="4">Running the Compilation</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        Now, by running <code>yarn compile</code>, you will get the compilation
        results saved in <code>build/main.compiled.json</code>.
      </Title>
    </div>
  );
};

export const Lesson3_3 = () => {
  return (
    <div>
      <Title weight="7">3.3 Writing a Simple FunC Contract</Title>

      <Title weight="4">📚 Lesson Summary</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        In the last lesson, we created the compilation script, and now it's time
        to start coding in FunC. Once we write the code, we’ll run{" "}
        <code>yarn compile</code> and check if our code works on the TVM.
      </Title>

      <Title weight="4">
        📝 Parameters received through the internal message handler{" "}
        <code>recv_internal</code>
      </Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        Open the <code>contracts/main.fc</code> file and take a look at our
        function:
      </Title>
      <pre>
        {`
  () recv_internal(int msg_value, cell in_msg, slice in_msg_body) impure {
  
  }
  `}
      </pre>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        The function <code>recv_internal</code> receives three parameters:
      </Title>
      <ul>
        <li>
          <strong>msg_value</strong> — the amount of TON attached to the
          message.
        </li>
        <li>
          <strong>in_msg</strong> — the message with information about the
          sender and the data.
        </li>
        <li>
          <strong>in_msg_body</strong> — the readable part of the message.
        </li>
      </ul>

      <Title weight="4">🔹 Function Modifiers</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        <code>impure</code> means that the function can have side effects.
      </Title>

      <video controls playsInline>
        <source src="https://cdn.stepik.net/video/326904/1080/0ca4e213567348d4338e11870be61b32.mp4" />
      </video>
      <Title weight="4">
        🔹 Importing <code>stdlib.fc</code>
      </Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        Add at the beginning of the file{" "}
        <code>#include "imports/stdlib.fc";</code>
      </Title>

      <Title weight="4">
        🔹 Parsing <code>in_msg</code>
      </Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        Let’s start by parsing the message to get the flag and the sender’s
        address:
      </Title>
      <pre>
        {`
  () recv_internal(int msg_value, cell in_msg, slice in_msg_body) impure {
    slice cs = in_msg.begin_parse();
    int flags = cs~load_uint(4);
    slice sender_address = cs~load_msg_addr();
  }
  `}
      </pre>

      <Title weight="4">🔹 Using Persistent Storage</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        Let’s store the sender’s address in persistent storage <code>c4</code>:
      </Title>
      <pre>
        {`
  () recv_internal(int msg_value, cell in_msg, slice in_msg_body) impure {
    slice cs = in_msg.begin_parse();
    int flags = cs~load_uint(4);
    slice sender_address = cs~load_msg_addr();
    set_data(begin_cell().store_slice(sender_address).end_cell());
  }
  `}
      </pre>

      <Title weight="4">🔹 Returning Data</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        Finally, we will return the <code>sender_address</code> so that the
        blockchain can interact with it:
      </Title>
      <pre>
        {`
  () recv_internal(int msg_value, cell in_msg, slice in_msg_body) impure {
    slice cs = in_msg.begin_parse();
    int flags = cs~load_uint(4);
    slice sender_address = cs~load_msg_addr();
    set_data(begin_cell().store_slice(sender_address).end_cell());
    return sender_address;
  }
  `}
      </pre>

      <Title weight="4">Compiling and Running the Contract</Title>
      <ol>
        <li>
          Run the <code>yarn compile</code> command to check the results.
        </li>
        <li>Upload the contract to the blockchain:</li>
        <pre>
          <code>
            tondev deploy --addr <address> --wc 0</address>
          </code>
        </pre>
      </ol>
    </div>
  );
};

export const Lesson3_4 = () => {
  return <div></div>;
};

export const Lesson3_5 = () => {
  return (
    <div>
      <Title weight="7">3.5 Deploying the Smart Contract</Title>

      <Title weight="4">📚 Lesson Summary</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        As mentioned in the first lesson of this chapter, the programming
        toolkit for TON is evolving, and sometimes it doesn’t make sense to
        create your own local environment from scratch. It’s worth mentioning a
        great tool supported by the TonTech team and officially supported by the
        TON Foundation — Blueprint. It also simplifies deployment. However, here
        we will create our own deployment script to better understand its logic.
      </Title>

      <Title style={{ fontSize: 16, marginTop: 4 }}>
        We are almost at the finish line! If you’ve made it to this part, I’m
        sure you’re ready to become a TON smart contract developer. It’s an
        honor for me to guide you on this path!
      </Title>

      <Title style={{ fontSize: 16, marginTop: 4 }}>
        So far, we’ve created tools for compiling and testing. But satellites
        belong in space — and smart contracts should be in the blockchain. Let’s
        move forward!
      </Title>

      <Title weight="4">Working with the Testnet</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        You’ve probably heard about the testnet — a separate network for testing
        by developers all possible components. The testnet works with TON test
        coins. These have no real value, so you don’t need to buy them. You can
        easily get them from the official Telegram bot, the testnet giver.
      </Title>

      <Title style={{ fontSize: 16, marginTop: 4 }}>
        We are going to deploy our contract to the testnet. The bot will ask for
        your address, so you need to have a wallet that works with TON test
        coins. You’re probably familiar with Tonhub and Tonkeeper wallets — they
        have a built-in testnet feature. You can use any of them, but for this
        example, I will use the Tonhub wallet created by TonWhales. It is
        available for iOS and Android. Follow the link to download the wallet
        app.
      </Title>

      <Title weight="4">Deployment Script</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        Let’s create a new file in the <code>scripts</code> folder —{" "}
        <code>deploy.ts</code>. As you remember, to deploy the contract, we need
        to:
      </Title>
      <ul>
        <li>Compute the future address of the contract.</li>
        <li>
          Create the initial state of the contract (code and initial data).
        </li>
        <li>Compose a message with the initial state.</li>
        <li>
          Send this message to the future contract address on the blockchain.
        </li>
      </ul>

      <pre>
        {`import { hex } from "../build/main.compiled.json";
import { beginCell, Cell, contractAddress, StateInit, storeStateInit } from "@ton/ton";

async function deployScript() {
  export const codeCell = Cell.fromBoc(Buffer.from(hex, "hex"))[0];
  export const dataCell = new Cell();
  export const stateInit: StateInit = { code: codeCell, data: dataCell };
  export const stateInitBuilder = beginCell();
  storeStateInit(stateInit)(stateInitBuilder);
  export const stateInitCell = stateInitBuilder.endCell();
  export const address = contractAddress(0, { code: codeCell, data: dataCell });
}

deployScript();`}
      </pre>

      <Title style={{ fontSize: 16, marginTop: 4 }}>
        Everything here is familiar except for the <code>StateInit</code> type
        and the <code>storeStateInit</code> function. The{" "}
        <code>storeStateInit</code> function is provided by the{" "}
        <code>@ton/core</code> library, and it helps us create a cell containing
        the <code>StateInit</code>.
      </Title>

      <Title style={{ fontSize: 16, marginTop: 4 }}>...</Title>

      <video controls playsInline>
        <source src="https://cdn.stepik.net/video/326907/1080/eb93f2d96bf80ced9ce2bbe517e41025.mp4" />
      </video>
      <Title weight="4">On-chain Tests after Deployment</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        Yes, you’ve succeeded! But there’s one more important thing to take care
        of — on-chain testing after deployment. Once our contract is deployed,
        we need to check that it behaves as we expect.
      </Title>
    </div>
  );
};

export const Lesson3_6 = () => {
  return (
    <div>
      <Title weight="7">3.6 Deploying from Testnet to Mainnet</Title>

      <Title weight="4">📝 In this lesson, you will learn</Title>

      <Title style={{ fontSize: 16, marginTop: 4 }}>
        In this lesson, we’ll adjust our script so that it can easily switch
        between testnet and mainnet. Then, we’ll learn how to deploy our
        contract to the mainnet.
      </Title>

      <Title weight="4">Adding an Environment Variable</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        For this, we’ll need a new environment variable <code>testnet</code>.
        We’ll add it to our script to specify which network to use. Based on
        this new variable, we’ll adjust our code accordingly.
      </Title>

      <Title style={{ fontSize: 16, marginTop: 4 }}>
        First, let’s update the script section. Start by adding the{" "}
        <code>mainnet</code> command:
      </Title>
      <pre>
        <code>{`"deploy:mainnet": "yarn compile && ts-node ./scripts/deploy.ts"`}</code>
      </pre>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        We want <code>testnet</code> to be the default environment variable:
      </Title>
      <pre>
        <code>{`"deploy": "TESTNET=true yarn compile && ts-node ./scripts/deploy.ts"`}</code>
      </pre>

      <Title style={{ fontSize: 16, marginTop: 4 }}>
        Now, to deploy to the mainnet, let’s add a mainnet test command:
      </Title>
      <pre>
        <code>{`"onchaintest:mainnet": "ts-node ./scripts/onchaintest.ts"`}</code>
      </pre>

      <video controls playsInline>
        <source src="https://cdn.stepik.net/video/326908/1080/3503fd13daa78e30901b6b3eac9cd034.mp4" />
      </video>

      <Title weight="4">Setting Up dotenv</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        To install dotenv, run the following command:
      </Title>
      <pre>
        <code>yarn add dotenv</code>
      </pre>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        Now, let’s add <code>dotenv</code> to the code:
      </Title>
      <pre>
        <code>{`import dotenv from "dotenv";\ndotenv.config();`}</code>
      </pre>

      <Title weight="4">Changing Network Dependency</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        In <code>deploy.ts</code>, we’ll use <code>process.env.TESTNET</code> to
        switch between testnet and mainnet:
      </Title>
      <pre>
        <code>{`let link = \`https://tonhub.com/transfer/\` + address.toString({ testOnly: process.env.TESTNET ? true : false });`}</code>
      </pre>

      <Title weight="4">Changing Logs</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        For deployment logs, let’s add network information:
      </Title>
      <pre>
        <code>{`console.log(\`Please scan the QR code below to deploy the contract to \${process.env.TESTNET ? "testnet" : "mainnet"}:\`);`}</code>
      </pre>

      <Title weight="4">Scripts</Title>
      <pre>
        <code>{`
"scripts": {
  "compile": "ts-node ./scripts/compile.ts",
  "test": "yarn compile && yarn jest",
  "deploy": "yarn compile && TESTNET=true ts-node ./scripts/deploy.ts",
  "deploy:mainnet": "yarn compile && ts-node ./scripts/deploy.ts",
  "onchaintest": "TESTNET=true ts-node ./scripts/onchaintest.ts",
  "onchaintest:mainnet": "ts-node ./scripts/onchaintest.ts"
}`}</code>
      </pre>

      <Title weight="4">Deploying to Mainnet</Title>
      <Title style={{ fontSize: 16, marginTop: 4 }}>
        Now, you can run the command <code>yarn deploy:mainnet</code> to deploy
        to the mainnet. This will allow you to see the contract in Tonhub and
        confirm the transaction with real funds.
      </Title>

      <Title style={{ fontSize: 16, marginTop: 4 }}>
        Congratulations! You’ve completed the lesson on deploying from testnet
        to mainnet.
      </Title>
    </div>
  );
};

export const Lesson8_4 = () => {
  return (
    <div>
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <video controls playsInline>
            <source src="https://cdn.stepik.net/video/326955/1080/4f6db68c3ed2c0cf88ea5dfd8adcb77d.mp4" />
          </video>

          <h2>📚 Lesson Summary</h2>
        </div>

        <section style={{ marginBottom: "20px" }}>
          <p>
            In Ethereum Virtual Machine contracts, it's possible to access each
            stored element separately and modify it. In TON, storage is
            accessible through <code>get_data()</code>/<code>set_data()</code>{" "}
            (register c4 holds references to cells). Thus, the developer needs
            to “manage” the storage manually.
          </p>
        </section>

        <section style={{ marginBottom: "20px" }}>
          <h3>Standard Message Handler</h3>
          <p>The standard message handler in TON follows this approach:</p>
          <pre>
            {`() handle_something(...) impure {
    (int total_supply, <a lot of vars>) = load_data();
    
    ... ;; do something, change data
    
    save_data(total_supply, <a lot of vars>);
}`}
          </pre>
          <p>
            Unfortunately, we understand that <code>&lt;a lot of vars&gt;</code>{" "}
            is a real enumeration of all the contract data fields. For example:
          </p>
          <pre>
            {`(int total_supply, int swap_fee, int min_amount, int is_stopped, int user_count, int max_user_count, 
slice admin_address, slice router_address, slice jettonA_address, slice jettonA_wallet_address, 
int jettonA_balance, int jettonA_pending_balance, slice jettonB_address, slice jettonB_wallet_address, 
int jettonB_balance, int jettonB_pending_balance, int mining_amount, int datetime_amount, int minable_time, 
int half_life, int last_index, int last_mined, cell mining_rate_cell, cell user_info_dict, cell operation_gas, 
cell content, cell lp_wallet_code) = load_data();`}
          </pre>
        </section>

        <section style={{ marginBottom: "20px" }}>
          <h4>Problem 1: Difficult to Update Storage Structure</h4>
          <p>
            Adding a new field requires updating the entire contract. If you
            decide to add another field, for instance, <code>is_paused</code>,
            you will need to update the
            <code>load_data()</code> and <code>save_data()</code> operators
            throughout the contract. This is not only time-consuming but also
            leads to hard-to-detect errors.
          </p>
        </section>

        <section style={{ marginBottom: "20px" }}>
          <h4>Problem 2: Namespace Pollution</h4>
          <p>
            Reading all storage fields in the current namespace pollutes it. In
            one of the audit examples,
            <code>min_amount</code> was overwritten by a local variable,
            allowing an attacker to overwrite the contract's state.
          </p>
        </section>

        <section style={{ marginBottom: "20px" }}>
          <h4>Problem 3: Increased Gas Costs</h4>
          <p>
            Parsing and re-packing the entire storage with every function call
            increases gas costs.
          </p>
        </section>

        <section style={{ marginBottom: "20px" }}>
          <h4>Solution 1: Use Global Variables</h4>
          <p>During prototyping, you can use global variables:</p>
          <pre>
            {`global int var1;
global cell var2;
global slice var3;

() load_data() impure {
    var cs = get_data().begin_parse();
    var1 = cs~load_coins();
    var2 = cs~load_ref();
    var3 = cs~load_bits(512);
}

() save_data() impure {
    set_data(
        begin_cell()
            .store_coins(var1)
            .store_ref(var2)
            .store_bits(var3)
            .end_cell()
        );
}`}
          </pre>
        </section>

        <section>
          <h4>Solution 2: Use Nested Storage</h4>
          <p>After prototyping, you can organize storage more efficiently:</p>
          <pre>
            {`() handle_something(...) impure {
    (slice swap_data, cell liquidity_data, cell mining_data, cell discovery_data) = load_data();
    (int total_supply, int swap_fee, int min_amount, int is_stopped) = swap_data.parse_swap_data();
    …
    swap_data = pack_swap_data(total_supply + lp_amount, swap_fee, min_amount, is_stopped);
    save_data(swap_data, liquidity_data, mining_data, discovery_data);
}`}
          </pre>
          <p>
            Nested variables can have multiple levels of nesting, helping to
            reduce namespace pollution.
          </p>
        </section>
      </div>

      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h2>Use end_parse()</h2>
        <p>
          Use <code>end_parse()</code> whenever possible when reading data from
          storage and from message payloads.
        </p>
        <p>
          Since TON uses bit streams with variable data formats, it’s helpful to
          ensure you’re reading as much as you’re writing. This can save hours
          of debugging.
        </p>

        <h3>Use Helper Functions and Avoid Magic Numbers</h3>
        <p>
          This code is from a real project. It can scare even an experienced
          developer with the number of magic numbers:
        </p>
        <pre>
          {`var msg = begin_cell()
    .store_uint(0xc4ff, 17)         ;; 0 11000100 0xff
    .store_uint(config_addr, 256)
    .store_grams(1 << 30)           ;; ~1 gram of value
    .store_uint(0, 107)
    .store_uint(0x4e565354, 32)
    .store_uint(query_id, 64)
    .store_ref(vset);
    
send_raw_message(msg.end_cell(), 1);`}
        </pre>
        <p>
          Introduce as many constants and wrappers as necessary to make the code
          more expressive:
        </p>
        <pre>
          {`var msg = begin_cell()
    .store_msg_flags(BOUNCEABLE)
    .store_slice(to_wallet_address)
    .store_coins(amount)
    .store_msgbody_prefix_stateinit()
    .store_ref(state_init)
    .store_ref(master_msg);

send_raw_message(msg.end_cell(), SEND_MODE_PAY_FEES_SEPARETELY);`}
        </pre>

        <h3>Example of a Bug</h3>
        <p>
          Be aware of potential pitfalls and bugs not specific to TON. Here’s an
          example from a real project:
        </p>
        <pre>
          {`() handle_transfer(...) impure {
  ...
  (slice from_user_info, int from_flag) = user_info_dict.udict_get?(256, from_addr_hash);
  int from_balance = from_user_info~load_coins();
  ...
  (slice to_user_info, int to_flag) = user_info_dict.udict_get?(256, to_addr_hash);
  int to_balance = to_user_info~load_coins();
  ...
  ;; save decreased from_balance to user_info_dict
  ;; save increased to_balance to user_info_dict
}`}
        </pre>
        <p>
          Transferring funds to the same address effectively doubles the balance
          because <code>to_balance</code> overwrites the zeroed{" "}
          <code>from_balance</code>.
        </p>

        <h3>Conclusion</h3>
        <ul>
          <li>
            Use nested storage structures and global variables for reliable
            storage handling.
          </li>
          <li>
            Write wrappers and declare constants to maintain code
            expressiveness.
          </li>
          <li>Test your code thoroughly.</li>
          <li>Conduct a comprehensive audit to avoid potential losses.</li>
        </ul>
      </div>
    </div>
  );
};

export const Lesson8_3 = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>📚 Lesson Summary</h2>
      <video controls playsInline>
        <source src="https://cdn.stepik.net/video/326935/1080/24d1980f21269eb52645ec991229884c.mp4" />
      </video>
      <section>
        <p>
          <strong>In EVM:</strong> If the user provides too little gas,
          everything will be reverted. If enough gas is provided, the actual
          costs will be automatically calculated and deducted from their
          balance.
        </p>
        <p>
          In <strong>Solidity</strong>, gas is not much of a concern for
          contract developers. If the user provides too little gas, everything
          will be reverted as if nothing happened (but gas will not be
          refunded). If enough gas is provided, the actual costs will be
          automatically calculated and deducted from their balance.
        </p>
      </section>

      <section>
        <h3>The situation is different in TON:</h3>
        <ul>
          <li>
            If there is not enough gas, the transaction will be partially
            executed.
          </li>
          <li>
            If there is too much gas, the excess must be returned, which is the
            responsibility of the developer.
          </li>
          <li>
            TON cannot do everything automatically due to its asynchronous
            nature.
          </li>
        </ul>
        <p>
          If a "group of contracts" is exchanging messages, management and
          calculations must occur in each message. A complete transaction with
          all the consequences may take time, and by the end, the user may not
          have enough TON in their wallet. This uses the Carry-Value principle.
        </p>
      </section>

      <section>
        <h3>Gas Calculation and Checking msg_value</h3>
        <ol>
          <li>Identify the incoming flow points for messages.</li>
          <li>Determine the cost of each handler.</li>
          <li>Check if the msg_value is sufficient at the incoming points.</li>
          <li>
            Do not overestimate everywhere — gas is automatically split between
            the "consequences."
          </li>
        </ol>
        <p>
          For example, if a contract sends three messages, you can send 0.33 TON
          to each to avoid overcharging. If the code starts sending more
          messages, gas requirements need to be rechecked.
        </p>
      </section>

      <section>
        <h3>Carefully Return Excess Gas</h3>
        <ul>
          <li>
            If excess gas is not returned to the sender, it will accumulate in
            contracts over time, which is inefficient.
          </li>
          <li>
            You can add a function to extract excess gas, as in the TON Jetton,
            where gas is returned to the sender with the message{" "}
            <code>op::excesses</code>.
          </li>
        </ul>
        <pre>
          {`send_raw_message(msg, SEND_MODE_CARRY_ALL_REMAINING_MESSAGE_VALUE)`}
        </pre>
        <p>
          This mode passes the remaining gas and is useful in a linear message
          flow, where each handler sends a single message.
        </p>
      </section>

      <section>
        <h3>When Not to Store All Unused Gas</h3>
        <ul>
          <li>
            Storage fees are deducted from the contract balance, not from the
            incoming gas.
          </li>
          <li>Event generation consumes the contract balance, not gas.</li>
          <li>
            Attaching values to messages or using SEND_MODE_PAY_FEES_SEPARATELY
            also consumes the balance.
          </li>
        </ul>
        <pre>
          {`var msg = begin_cell().store_uint(0x18, 6).store_slice(destination)
      .store_coins(10000000)                ;; This will be deducted from contract balance
      .store_uint(1, 1 + 4 + 4 + 64 + 32 + 1 + 1).store_ref(msg_body);
    send_raw_message(msg.end_cell(), 0);`}
        </pre>
        <p>
          These actions consume the contract balance, which can be costly if
          unused gas is not returned.
        </p>
      </section>

      <section>
        <h3>Standard Gas Cost Calculation</h3>
        <p>Example code from TON Wallet:</p>
        <pre>
          {`int ton_balance_before_msg = my_ton_balance - msg_value;
int storage_fee = const::min_tons_for_storage - min(ton_balance_before_msg, const::min_tons_for_storage);
msg_value -= storage_fee + const::gas_consumption;

if(forward_ton_amount) {
    msg_value -= (forward_ton_amount + fwd_fee);
    ...
}

if (msg_value > 0) {    ;; there is still something to return
    var msg = begin_cell()
        .store_uint(0x10, 6)
        .store_slice(response_address)
        .store_coins(msg_value)
    ...`}
        </pre>
        <p>
          Remember: if the contract balance runs out, the transaction will be
          partially executed.
        </p>
      </section>

      <section>
        <h3>Resume</h3>
        <ul>
          <li>
            TON requires developers to manage gas and check its sufficiency.
          </li>
          <li>Gas costs can grow when using unlimited data structures.</li>
          <li>It is recommended to return excess gas to the sender.</li>
          <li>
            If gas runs out, the transaction will be partially executed, which
            can be critical.
          </li>
        </ul>
      </section>
    </div>
  );
};
export const Lesson8_2 = () => (
  <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
    <h2>📚 Lesson Summary</h2>

    <video controls playsInline>
      <source src="https://cdn.stepik.net/video/326934/1080/26e0a455f14581add026c2734f582146.mp4" />
    </video>
    <section>
      <p>
        <strong>When developing for Ethereum Virtual Machine (EVM)</strong>, a
        project is often split into multiple contracts for convenience. In some
        cases, it is possible to implement all functionality in one contract,
        even when it's necessary to split it (e.g., liquidity pairs in AMM).
      </p>
      <p>
        <em>In EVM:</em> Transactions are fully executed: either everything
        works, or everything is reverted.
      </p>
      <p>
        <strong>In TON</strong>, it is recommended to avoid unlimited data
        structures and break contracts into smaller parts that manage small
        volumes of data. An example is the implementation of Jetton (TON version
        of ERC-20 tokens).
      </p>
    </section>

    <section>
      <h3>Contract Sharding</h3>
      <p>Jetton structure:</p>
      <ul>
        <li>
          <strong>jetton-minter:</strong> stores total_supply, minter_address,
          metadata, jetton_wallet_code
        </li>
        <li>
          <strong>jetton-wallet:</strong> for each owner, stores owner address,
          balance, jetton-minter address, jetton_wallet_code
        </li>
      </ul>
      <p>
        Jetton-minter stores general token data, and jetton-wallet stores
        individual data for each owner. This allows Jetton to be transferred
        directly between wallets, which is important for parallel transaction
        processing.
      </p>
    </section>

    <section>
      <h3>Partial Transaction Execution</h3>
      <p>
        In TON, contracts can partially execute transactions. For example, the
        message flow in a standard Jetton can include:
      </p>
      <ol>
        <li>
          Sending <code>op::transfer</code> to <code>sender_wallet</code>.
        </li>
        <li>
          Reducing the token balance in <code>sender_wallet</code>.
        </li>
        <li>
          Sending <code>op::internal_transfer</code> to{" "}
          <code>destination_wallet</code>.
        </li>
        <li>
          Increasing the token balance in <code>destination_wallet</code>.
        </li>
        <li>
          Sending <code>op::transfer_notification</code> to the receiver.
        </li>
        <li>Returning excess gas.</li>
      </ol>
      <p>
        If <code>destination_wallet</code> cannot process the{" "}
        <code>op::internal_transfer</code> message, steps after that will not be
        executed. This can lead to inconsistency and loss of funds.
      </p>
    </section>

    <section>
      <h3>Message Flow Diagrams</h3>
      <p>
        It is recommended to create diagrams to track messages in contracts.
        This is especially useful for complex contracts, like decentralized
        exchanges (DEX), where a single process can involve more than a dozen
        messages.
      </p>
      <p>
        In TON, external calls are messages that are processed later, which
        requires careful design.
      </p>
    </section>

    <section>
      <h3>Avoid Failed Sends and Handle Rejected Messages</h3>
      <ul>
        <li>Check if you have enough gas.</li>
        <li>
          Validate that the wallet is operational and ready for incoming
          messages.
        </li>
      </ul>
      <p>
        Failed sends cause wasted resources. Always verify the readiness of the
        message receiver and prevent failed sends with proper checks.
      </p>
    </section>

    <section>
      <h3>Conclusions</h3>
      <ul>
        <li>
          TON requires careful contract design to prevent partial execution
          failures.
        </li>
        <li>
          Message flow tracking is important for complex contracts like Jettons.
        </li>
        <li>
          Contract transactions in TON require careful management of gas and
          execution steps to prevent loss of funds.
        </li>
      </ul>
    </section>
  </div>
);
export const Lesson8_1 = () => {
  return (
    <div>
      <h1>💎 Welcome to Part 8!</h1>
      <p>
        In this chapter, you will explore various topics related to security and
        blockchain management in TON. We'll begin with an in-depth study of
        naive wallets, replay attacks, denial-of-service attacks, and contract
        recommendations. Afterward, we will switch to message flow, where you
        will gain the necessary knowledge and skills to work with it
        effectively. Gas management in TON is another crucial topic covered in
        one of the lessons, where you will learn and master effective
        strategies. Additionally, this chapter includes a brief course on
        managing data storage in TON, equipping you with essential knowledge and
        techniques for efficient data storage.
      </p>

      <h2>📚 Lesson Summary</h2>
      <p>
        TON is an innovative blockchain that implements the latest concepts in
        smart contract development. However, it still requires careful
        attention. In addition to traditional security threats and attacks,
        there are new ones that are unique to TON. Let's discuss them.
      </p>

      <h3>In this section, we will talk about external messages.</h3>

      <h4>Smart Contract Entry Points</h4>
      <p>
        As you know, a smart contract in TON has three possible entry points:
      </p>
      <ul>
        <li>
          Each contract must include the <code>recv_internal</code> function.
        </li>
        <li>
          Optionally, <code>recv_external</code> is used for incoming external
          messages.
        </li>
        <li>
          <code>run_ticktock</code> is called in ticktock transactions in
          special smart contracts. Regular contracts do not use this.
        </li>
      </ul>

      <p>
        Here, we will focus on <code>recv_external</code>. The concept is
        familiar to you: the user creates an off-chain transaction, signs it
        with their private key, and sends it to the contract.
      </p>

      <h4>Naive Wallet Implementation</h4>
      <p>
        The wallet in TON is simply a smart contract. Let's write a simple naive
        wallet:
      </p>
      <pre>
        {`
() recv_external(slice in_msg) impure {     
    var signature = in_msg~load_bits(512);  ;; read the signature from the incoming message
    var cs = in_msg;                        ;; create a copy of the incoming message
    var ds = get_data().begin_parse();      ;; reading the contract storage
    var public_key = ds~load_uint(256);     ;; read the authorized key (contract owner)
    throw_unless(34, check_signature(slice_hash(in_msg), signature, public_key));
    accept_message();                       ;; we are ready to pay for gas to process this
    var mode = cs~load_uint(8);             ;; read the mode from the incoming message
    send_raw_message(cs~load_ref(), mode);  ;; send the received message
}
        `}
      </pre>

      <p>
        This contract will process messages signed by the contract owner.
        However, there is nothing to stop an attacker from reading the payload
        and replaying the transmission. This is known as a replay attack. The
        attacker receives a message signed by the contract owner and sends it
        again to the wallet. It will be executed once more.
      </p>

      <h4>Replay Attack</h4>
      <p>
        Now, the wallet owner needs to specify a timestamp until which the
        message is valid. However, within this time window, the message can
        still be replayed.
      </p>
      <pre>
        {`
() recv_external(slice in_msg) impure {
    var signature = in_msg~load_bits(512);
    var cs = in_msg; 
    var valid_until = cs~load_uint(32);         ;; added
    throw_if(35, valid_until <= now());         ;; added
    var ds = get_data().begin_parse();
    var public_key = ds~load_uint(256);
    throw_unless(34, check_signature(slice_hash(in_msg), signature, public_key));
    accept_message();
    var mode = cs~load_uint(8);
    send_raw_message(cs~load_ref(), mode);
}
        `}
      </pre>

      <h4>Replay Attack (with Sequence Number)</h4>
      <p>
        Now, the wallet owner needs to specify a sequence number, which
        increments compared to the stored one. This ensures that each message
        can only be processed once:
      </p>
      <pre>
        {`
() recv_external(slice in_msg) impure {
    var signature = in_msg~load_bits(512);
    var cs = in_msg; 
    var (msg_seqno, valid_until) = (cs~load_uint(32), cs~load_uint(32));            ;; modified
    throw_if(35, valid_until <= now());
    var ds = get_data().begin_parse(); 
    var (stored_seqno, public_key) = (ds~load_uint(32), ds~load_uint(256));         ;; modified
    throw_unless(33, msg_seqno == stored_seqno);                                    ;; added
    throw_unless(34, check_signature(slice_hash(in_msg), signature, public_key));
    accept_message();
    var mode = cs~load_uint(8);
    send_raw_message(cs~load_ref(), mode);

    set_data(begin_cell()                                   ;; added
        .store_uint(stored_seqno + 1, 32)
        .store_uint(public_key, 256)
        .end_cell());                                   
}
        `}
      </pre>

      <h4>Denial-of-Service Attack</h4>
      <p>
        Important note: <code>recv_external</code> should be used carefully, and{" "}
        <code>accept_message()</code> should only be called after checks.
        Otherwise, malicious "gasless" exceptions from the contract can drain
        all the gas.
      </p>

      <pre>
        {`
() recv_external(slice in_msg) impure {
    var signature = in_msg~load_bits(512);
    var cs = in_msg; 
    var (msg_seqno, valid_until) = (cs~load_uint(32), cs~load_uint(32));    
    throw_if(35, valid_until <= now());
    var ds = get_data().begin_parse(); 
    var (stored_seqno, public_key) = (ds~load_uint(32), ds~load_uint(256)); 
    throw_unless(33, msg_seqno == stored_seqno);                                    
    throw_unless(34, check_signature(slice_hash(in_msg), signature, public_key));

    accept_message();                           ;; accept after checking signature only

    var mode = cs~load_uint(8);
    send_raw_message(cs~load_ref(), mode);
    set_data(begin_cell()
        .store_uint(stored_seqno + 1, 32)
        .store_uint(public_key, 256)
        .end_cell());                                   
}
        `}
      </pre>

      <h3>Failed Replay Attack</h3>
      <p>
        Note that if an error occurs after <code>accept_message()</code>, the
        transaction will be recorded in the blockchain, and a fee will be
        deducted from the contract's balance. However, the storage will not be
        updated, and actions will not be applied.
      </p>

      <h3>EVM vs TON</h3>
      <p>
        In the Ethereum Virtual Machine (EVM), protection against replay attacks
        is built-in. In TON, protection is more flexible and requires careful
        handling.
      </p>

      <h3>Recommendations</h3>
      <p>
        Fortunately, there is a simple recommendation for all TON smart contract
        developers: avoid handling external messages.
      </p>
    </div>
  );
};
export const Lesson7_5 = () => {
  return (
    <div>
      <h1>📚 Lesson Summary</h1>
      <p>
        In this lesson, we will review the code of a classic NFT object and
        learn about the concept of SoulBound (SBT).
      </p>

      <h2>NFT Object Contract</h2>
      <p>Let's open and review the contract.</p>
      <pre>
        <code>
          {`int min_tons_for_storage() asm "50000000 PUSHINT"; ;; 0.05 TON`}
        </code>
      </pre>
      <p>
        As in previous lessons, we see that there are certain constants that
        show the minimum amount of coins we must store in the contract in order
        to be able to pay for rent.
      </p>

      <pre>
        <code>
          {`(int, int, slice, slice, cell) load_data() {{
	slice ds = get_data().begin_parse();
	var(index, collection_address) = (ds~load_uint(64), ds~load_msg_addr());
	if (ds.slice_bits() > 0) {{
		return(-1, index, collection_address, ds~load_msg_addr(), ds~load_ref());
	}} else {{
		return(0, index, collection_address, null(), null()); // nft not initialized yet
	}}
}}`}
        </code>
      </pre>
      <p>
        Then we see load_data. This load_data is slightly different from what
        we've seen before. Usually, we just read data from local storage, but
        here we have more complex logic. So, we open a local storage cell for
        reading, and then we read the index and collection_address. We know what
        index and collection_address are.
      </p>

      <h2>store_data</h2>
      <pre>
        <code>
          {`() store_data(int index, slice collection_address, slice owner_address, cell content) impure {{
	set_data(
		begin_cell()
			.store_uint(index, 64)
			.store_slice(collection_address)
			.store_slice(owner_address)
			.store_ref(content)
			.end_cell()
	);
}}`}
        </code>
      </pre>
      <p>
        We also see that store_data is just a regular expression, as in other
        contracts we've seen.
      </p>

      <video controls playsInline>
        <source src="https://cdn.stepik.net/video/326932/1080/7f06a84d49db0754c1887926282cb2c3.mp4" />
      </video>

      <h2>Conclusion</h2>
      <p>
        From the very simple logic of the third part, we have come to understand
        many things in complex contracts such as NFTs or Jettons. Step by step,
        you can study specific syntax and concepts, and then more complex logic
        will open up to you.
      </p>
      <p>
        I really appreciate your attention. This might be the most difficult
        chapter for you, although we didn’t code anything, we just read material
        that you have never seen before. It's very complex. Therefore, I am very
        proud that you have reached this final lesson, and I look forward to
        meeting you in the next chapters. I hope you enjoy this course.
      </p>
    </div>
  );
};

export const Lesson7_4 = () => {
  return (
    <div className="lesson-container">
      <h1>📚 Lesson Summary</h1>

      {/* Video Section */}
      <video controls playsInline>
        <source src="https://cdn.stepik.net/video/326931/1080/792cbc0c9fbf204e52f9fd208b885c75.mp4" />
      </video>

      {/* Lesson Content */}
      <div className="lesson-content">
        <p>
          In the same repository where the code for fungible tokens is stored,
          the code for non-fungible tokens is placed. This is a standard
          implementation of the NFT standard, described in the same way as
          Jetton. Here, you can find examples of metadata in accordance with the
          standards we have reviewed in previous lessons.
        </p>
        <p>
          For NFTs, there are also two types of contracts — NFT collections and
          NFT objects. The first contract deploys the second ones. If you want
          to release a collection containing 10,000 objects, you will have to
          deploy 10,001 smart contracts. You will do this yourself.
        </p>

        <h3>NFT Collection Smart Contract</h3>
        <pre>
          {`(slice, int, cell, cell, cell) load_data() inline {
  var ds = get_data().begin_parse();
  return 
    (ds~load_msg_addr(), ;; owner_address
     ds~load_uint(64), ;; next_item_index
     ds~load_ref(), ;; content
     ds~load_ref(), ;; nft_item_code
     ds~load_ref()  ;; royalty_params
     );
}`}
        </pre>

        <p>
          Here, in storage, we have owner_address, next_item_index, and content.
          Again, this content is a cell created according to the metadata
          standard, which is also available in the same standard repository we
          reviewed. Then we have nft_item_code and a cell with royalty_params.
          Soon we will learn more about them.
        </p>

        <h3>Smart Contract Functions</h3>
        <pre>
          {`() save_data(slice owner_address, int next_item_index, cell content, cell nft_item_code, cell royalty_params) impure inline {
  set_data(begin_cell()
    .store_slice(owner_address)
    .store_uint(next_item_index, 64)
    .store_ref(content)
    .store_ref(nft_item_code)
    .store_ref(royalty_params)
    .end_cell());
}`}
        </pre>

        <p>
          In the smart contract of the object, owners will change. The owner of
          the collection may also change. You need to understand this logic. The
          first contract we will review is the NFT collection, and then we will
          look at the NFT object smart contract. Again, these are not just
          separate contracts, they are a system of smart contracts.
        </p>

        <h3>Deploy NFT Item</h3>
        <pre>
          {`() deploy_nft_item(int item_index, cell nft_item_code, int amount, cell nft_content) impure {
  cell state_init = calculate_nft_item_state_init(item_index, nft_item_code);
  slice nft_address = calculate_nft_item_address(workchain(), state_init);
  var msg = begin_cell()
            .store_uint(0x18, 6)
            .store_slice(nft_address)
            .store_coins(amount)
            .store_uint(4 + 2 + 1, 1 + 4 + 4 + 64 + 32 + 1 + 1 + 1)
            .store_ref(state_init)
            .store_ref(nft_content);
  send_raw_message(msg.end_cell(), 1); ;; pay transfer fees separately, revert on errors
}`}
        </pre>

        <p>
          Here is an example of code for deploying an NFT. We calculate
          state_init and the NFT address, create a message with coins, and pass
          it for sending.
        </p>

        <h3>Function to Send Royalties</h3>
        <pre>
          {`() send_royalty_params(slice to_address, int query_id, slice data) impure inline {
  var msg = begin_cell()
    .store_uint(0x10, 6)
    .store_slice(to_address)
    .store_coins(0)
    .store_uint(0, 1 + 4 + 4 + 64 + 32 + 1 + 1)
    .store_uint(op::report_royalty_params(), 32)
    .store_uint(query_id, 64)
    .store_slice(data);
  send_raw_message(msg.end_cell(), 64); ;; carry all the remaining value of the inbound message
}`}
        </pre>

        <h3>Further Examples</h3>
        <p>
          Next come other examples of operations, such as changing the owner of
          a collection and batch deploying new NFTs. The logic of these
          functions is based on previous descriptions and is ensured by the
          standard.
        </p>

        <h3>Conclusion</h3>
        <p>
          This contract is much simpler than the one we created with Jetton.
          It’s important to see once again that in TON everything is a contract.
          Very simple logic can create a complex system of contracts.
        </p>
      </div>
    </div>
  );
};
export const Lesson7_3 = () => {
  return (
    <div>
      <h1>📚 Lesson Outline</h1>

      <div>
        <h2>What is a Jetton Wallet?</h2>
        <p>
          In this lesson, we will review the Jetton wallet smart contract. As
          you remember, the wallet smart contract is deployed by the miner's
          smart contract when we mine Jetton. Alternatively, the wallet smart
          contract is deployed by another wallet smart contract when we make a
          transfer.
        </p>

        <h3>Preparation:</h3>
        <pre>
          <code>
            {`int min_tons_for_storage() asm "10000000 PUSHINT"; ;; 0.01 TON
int gas_consumption() asm "15000000 PUSHINT"; ;; 0.015 TON`}
          </code>
        </pre>
        <p>
          In this code, we see that we need to have a certain amount of TON to
          pay for storage and gas to perform operations.
        </p>

        <video>
          <source src="https://cdn.stepik.net/video/326930/1080/abe56f44e1ef5ea0718a4daa410d3f6e.mp4" />
        </video>

        <h3>Storage Code:</h3>
        <pre>
          <code>
            {`{- Storage
storage#_ balance:Coins owner_address:MsgAddressInt jetton_master_address:MsgAddressInt jetton_wallet_code:^Cell = Storage;
}`}
          </code>
        </pre>

        <h3>Functions:</h3>
        <pre>
          <code>
            {`(int, slice, slice, cell) load_data() inline {... }
() save_data (int balance, slice owner_address, slice jetton_master_address, cell jetton_wallet_code) impure inline {... }`}
          </code>
        </pre>
        <p>
          We add the load_data and save_data functions to encapsulate the logic
          of working with the storage.
        </p>

        <h3>Transaction Logic:</h3>
        <pre>
          <code>
            {`int op = in_msg_body~load_uint(32);

if (op == op::transfer()) { ;; outgoing transfer
send_tokens(in_msg_body, sender_address, msg_value, fwd_fee);
return ();
}

if (op == op::internal_transfer()) { ;; incoming transfer
receive_tokens(in_msg_body, sender_address, my_balance, fwd_fee, msg_value);
return ();
}

if (op == op::burn()) { ;; burn
burn_tokens(in_msg_body, sender_address, msg_value, fwd_fee);
return ();
}`}
          </code>
        </pre>

        <h3>Token Receiving Function:</h3>
        <pre>
          <code>
            {`() receive_tokens (slice in_msg_body, slice sender_address, int my_ton_balance, int fwd_fee, int msg_value) impure {... }`}
          </code>
        </pre>

        <h3>Token Burning Function:</h3>
        <pre>
          <code>
            {`() burn_tokens (slice in_msg_body, slice sender_address, int msg_value, int fwd_fee) impure {... }`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export const Lesson7_2 = () => {
  return (
    <div>
      <div className="lesson-notes">
        <h1>📚 Lesson Outline</h1>

        <section>
          <h2>Introduction</h2>
          <p>
            We will begin with the Jetton standard. Jetton, also known as the
            standard for interchangeable tokens, was added to TON in the TEP-74
            extension. This repository contains a complete description of how
            Jetton contracts should function, along with two contracts: the
            master contract (miner contract) and the wallet contract.
          </p>
        </section>

        <video controls playsInline>
          <source src="https://cdn.stepik.net/video/326929/1080/4c13da3f39da3968dfef53095d24487c.mp4" />
        </video>
        <section>
          <h2>Wallet Smart Contract Specification</h2>
          <p>
            The wallet smart contract must handle specific messages. For
            example, it should transmit and explain everything that happens as a
            result of a transfer. It must also handle burn messages. It has a
            get-method get_wallet_data, where it must return data about itself.
            This is the primary way to implement the wallet contract.
          </p>
        </section>

        <section>
          <h2>Master Contract</h2>
          <p>
            The other contract is the master contract. In it, we place not the
            code itself but the functionality that must be implemented in a
            certain way so that other contracts can interact with your Jetton
            contracts. They will know exactly how to work with your contracts
            because you have the master contracts. All of these Jettons are
            minted by the miner.
          </p>
        </section>

        <section>
          <h2>Working with Jetton Contract Code</h2>
          <p>
            We will use several additional files, such as Jetton utilities, as
            they contain certain logic that helps the main Jetton miner file.
            Additionally, we have opcodes and parameters — these are useful
            service files, and we encapsulate some logic in them to reuse it.
          </p>
        </section>

        <section>
          <h2>Example of Jetton Miner Code</h2>
          <pre>
            {`;; storage scheme
;; storage#_ total_supply:Coins admin_address:MsgAddress content:^Cell jetton_wallet_code:^Cell = Storage;

(int, slice, cell, cell) load_data() inline {
  slice ds = get_data().begin_parse();
  return (
      ds~load_coins(), ;; total_supply
      ds~load_msg_addr(), ;; admin_address
      ds~load_ref(), ;; content
      ds~load_ref()  ;; jetton_wallet_code
  );
}

() save_data(int total_supply, slice admin_address, cell content, cell jetton_wallet_code) impure inline {
  set_data(begin_cell()
            .store_coins(total_supply)
            .store_slice(admin_address)
            .store_ref(content)
            .store_ref(jetton_wallet_code)
           .end_cell()
          );
}`}
          </pre>
          <p>
            We already know that this logic involves reading and saving data in
            storage. We can use this function anywhere in the code to simplify
            the data reading process.
          </p>
        </section>

        <section>
          <h2>Minting Logic</h2>
          <p>
            For example, we have stored the minting functionality within this
            function. We prepare some data, read something important — we will
            discuss that later. Then we run the mint_tokens function.
          </p>
        </section>

        <section>
          <h2>Message Handling Function</h2>
          <pre>
            {`() recv_internal(int msg_value, cell in_msg_full, slice in_msg_body) impure {
    if (in_msg_body.slice_empty?()) { ;; ignore empty messages
        return ();
    }
    slice cs = in_msg_full.begin_parse();
    int flags = cs~load_uint(4);

    if (flags & 1) { ;; ignore all bounced messages
        return ();
    }
    slice sender_address = cs~load_msg_addr();

    int op = in_msg_body~load_uint(32);
    int query_id = in_msg_body~load_uint(64);

    (int total_supply, slice admin_address, cell content, cell jetton_wallet_code) = load_data();

    if (op == op::mint()) {
        throw_unless(73, equal_slices(sender_address, admin_address));
        slice to_address = in_msg_body~load_msg_addr();
        int amount = in_msg_body~load_coins();
        cell master_msg = in_msg_body~load_ref();
        slice master_msg_cs = master_msg.begin_parse();
        master_msg_cs~skip_bits(32 + 64); ;; op + query_id
        int jetton_amount = master_msg_cs~load_coins();
        mint_tokens(to_address, jetton_wallet_code, amount, master_msg);
        save_data(total_supply + jetton_amount, admin_address, content, jetton_wallet_code);
        return ();
    }

    if (op == op::burn_notification()) {
        int jetton_amount = in_msg_body~load_coins();
        slice from_address = in_msg_body~load_msg_addr();
        throw_unless(74,
            equal_slices(calculate_user_jetton_wallet_address(from_address, my_address(), jetton_wallet_code), sender_address)
        );
        save_data(total_supply - jetton_amount, admin_address, content, jetton_wallet_code);
        slice response_address = in_msg_body~load_msg_addr();
        if (response_address.preload_uint(2) != 0) {
          var msg = begin_cell()
            .store_uint(0x10, 6) ;; nobounce - int_msg_info$0 ihr_disabled:Bool bounce:Bool bounced:Bool src:MsgAddress -> 011000
            .store_slice(response_address)
            .store_coins(0)
            .store_uint(0, 1 + 4 + 4 + 64 + 32 + 1 + 1)
            .store_uint(op::excesses(), 32)
            .store_uint(query_id, 64);
          send_raw_message(msg.end_cell(), 2 + 64);
        }
        return ();
    }

    return ();
}`}
          </pre>
        </section>

        <section>
          <h2>Next Lesson</h2>
          <p>
            In the next lesson, we will dive deeper into more functions and
            explain the necessary contract logic.
          </p>
        </section>
      </div>
    </div>
  );
};
export const Lesson7_1 = () => {
  return (
    <div>
      <h1>💎 Welcome to the seventh part!</h1>
      <p>
        In this chapter, we will explore topics related to advanced contract
        implementations. We will dive into the intricacies of Jetton and NFT,
        study their significance, and possible use cases. Additionally, we will
        dedicate one lesson to analyzing the Jetton standard and its
        implementations. Another lesson will focus on examining the features and
        intricacies of a wallet smart contract. We will study the NFT smart
        contract, looking at its structure and unique features. Finally, we will
        closely examine the code that governs NFTs. The goal of this chapter is
        to provide a thorough understanding of these advanced contract
        implementations, enabling you to effectively utilize their capabilities.
      </p>
      <div>{/* Replace with actual video */}</div>
      <h3>📚 Lesson Summary</h3>
      <p>
        Welcome to the new chapter. In this chapter, we will talk about more
        complex implementations of our contracts — Jetton and NFT. As you
        already know, everything in TON is a contract. The wallet is a contract.
        The logic of the smart contract is a contract. Jetton and NFT are also
        smart contracts.
      </p>
      <p>
        These smart contracts have standard implementations. They are needed so
        everyone understands how to interact with Jetton or NFT. We will look at
        the repository where all the standard implementations are stored, those
        that the community has already agreed upon, so everyone works with
        Jetton and NFT in a certain way.
      </p>
      <p>
        We will dig even deeper and analyze the code of the standard
        implementation. A standard is just a set of requirements for the
        contract and its behavior externally. But there are also ready-made
        standard contract implementations. Some published contracts already
        implement the entire logic following the best practices of the standard.
        These are available for both Jetton and NFT, and we will examine their
        code.
      </p>
      <p>
        You will understand the overall logic. For Jetton, there isn’t just one
        contract but several. We have miner and wallet contracts. You will
        understand their logic in the next lesson. The same applies to NFTs.
        There are collection contracts, individual token contracts. You will
        learn more about how they function, interact with each other, and better
        master the FunC language by studying these standard implementations and
        seeing how everything can be implemented. As a result, you will be able
        to use this knowledge later when writing your own contracts. I’m excited
        for what’s ahead, let’s move on to the next lesson.
      </p>
    </div>
  );
};
export const Lesson6_4 = () => {
  return (
    <div>
      <h1>📚 Lesson Summary</h1>

      <div>
        <video controls playsInline>
          <source src="https://cdn.stepik.net/video/326944/1080/201850bae6ee407f6e23ef9b6c68c2c7.mp4" />
        </video>
      </div>

      <p>
        Today we will create another project — a chat bot. This will be a
        backend project because chat bots work this way. You write a script that
        runs on your server and use an API key to connect to the Telegram
        server. Your script can receive updates from the Telegram server when
        new messages arrive and trigger responses on behalf of your chat bot.
      </p>

      <h3>Preparation</h3>
      <p>
        Let's start the project by creating a new directory and moving into it:
      </p>
      <pre>
        mkdir first_contract_tg_bot
        <br />
        cd first_contract_tg_bot
      </pre>

      <p>Now let’s install the new package:</p>
      <pre>yarn init</pre>

      <p>To work with TypeScript, let’s install the required packages:</p>
      <pre>yarn add typescript ts-node @types/node @swc/core --dev</pre>

      <p>Create the `tsconfig.json` file:</p>
      <pre>
        {`{
          "compilerOptions": {
            "target": "es2020",
            "module": "commonjs",
            "esModuleInterop": true,
            "forceConsistentCasingInFileNames": true,
            "strict": true,
            "skipLibCheck": true,
            "resolveJsonModule": true
          },
          "ts-node": {
            "transpileOnly": true,
            "transpiler": "ts-node/transpilers/swc"
          }
        }`}
      </pre>

      <p>Install Telegraf to create the chat bot:</p>
      <pre>yarn add telegraf</pre>

      <h3>Programming the Chat Bot</h3>
      <p>
        Create a folder `src` and a file `index.ts`. Add a script to
        `package.json` to run it:
      </p>
      <pre>
        {`{
          "name": "first_contract_tg_bot",
          "version": "1.0.0",
          "main": "index.js",
          "license": "MIT",
          "dependencies": {
            "telegraf": "^4.12.2"
          },
          "scripts": {
            "start": "ts-node ./src/index.ts"
          }
        }`}
      </pre>

      <p>Import `Telegraf` and create a bot instance:</p>
      <pre>
        {`import { Telegraf } from "telegraf";
        const bot = new Telegraf(process.env.TG_BOT_TOKEN!);`}
      </pre>

      <p>Use dotenv to load the environment variable:</p>
      <pre>import dotenv from "dotenv"; dotenv.config();</pre>

      <p>
        To launch the bot, let’s add an example code with a welcome message and
        a keyboard:
      </p>
      <pre>
        {`bot.start((ctx) =>
          ctx.reply("Welcome to our counter app!", {
            reply_markup: {
              keyboard: [
                ["Increment by 5"],
                ["Deposit 1 TON"],
                ["Withdraw 0.7 TON"],
              ],
            },
          })
        );

        bot.launch();
        process.once("SIGINT", () => bot.stop("SIGINT"));
        process.once("SIGTERM", () => bot.stop("SIGTERM"));`}
      </pre>

      <p>Run the bot:</p>
      <pre>yarn start</pre>

      <p>
        Your bot is working, you can check it by pressing Start in Telegram.
      </p>
    </div>
  );
};

export const Lesson6_3 = () => {
  return (
    <div>
      {/* Video Section */}
      <div>
        <video controls playsInline>
          <source src="https://cdn.stepik.net/video/326926/1080/485b1d3124559c640961a56c8e460be0.mp4" />
        </video>
      </div>

      {/* Lesson Content */}
      <div>
        <h2>📚 Lesson Summary</h2>

        <p>
          Let's look at how to install the SDK that will allow us to use the TWA
          (Telegram Web App) APIs. I open the `App.tsx` file in the project we
          created in the previous chapter and enter the following command:
        </p>
        <code>yarn add @twa-dev/sdk</code>

        <p>
          Great, we’ve installed it. Now we’re going to import the web app and
          start interacting with it.
        </p>

        <p>
          First, we will show the platform to the user in our interface — this
          is useful if you want to implement different features depending on the
          platform. Second, we will add a button to trigger an action.
        </p>

        <p>
          Let's start with the platform. We made the text bold and added the
          WebApp platform. This will be displayed on the screen:
        </p>

        <div className="Card">
          {`{WebApp.platform}
          Our contract Address
          className="Hint">{contract_address?.slice(0, 30) + "..."}
          <b>Our contract Balance</b>
          {contract_balance && (
            <div className="Hint">{fromNano(contract_balance)}
          )}`}
        </div>

        <div className="Card">
          <b>Counter Value</b>
          <div>{`{counter_value ?? "Loading..."}`}</div>
        </div>

        {`<a onClick={showAlert}>Show Alert</a>

        <br />

        {connected && (
          <a onClick={sendIncrement}>Increment by 5</a>
        )}

        <br />

        {connected && (
          <a onClick={sendDeposit}>Request deposit of 1 TON</a>
        )}

        <br />

        {connected && (
          <a onClick={sendWithdrawalRequest}>Request 0.7 TON withdrawal</a>
        )}
`}
        <p>
          Everything is quite simple. Now we will save the files and commit them
          to GitHub:
        </p>
        <code>
          git status
          <br />
          git add .<br />
          git commit -m "TWA SDK integrated"
          <br />
          git push
          <br />
          git push origin master
        </code>

        <p>Developing GitHub Actions</p>

        <p>
          As you recall, we’ve set up GitHub Actions to build and deploy our app
          to GitHub Pages. We can see that this process is already running:
        </p>
        <p>TWA SDK integrated - action</p>

        <p>
          GitHub Actions is a powerful tool. You can save a lot of time by
          delegating various tasks to it.
        </p>

        <p>
          We will run another action that will publish our page to GitHub from a
          separate branch. Wait until it completes.
        </p>

        <p>
          As you can see, we cannot determine the user platform since the web
          app object is unavailable because we are not inside Telegram. So this
          is just a draft post that needs to be expanded with several checks to
          determine if the user is inside Telegram.
        </p>

        <p>
          Now we can move to the mobile Telegram and see how it works inside the
          messenger.
        </p>

        <p>
          My platform is iOS. As I mentioned, this is just a draft post, and we
          can improve it later.
        </p>

        <p>If I press Show alert, a pop-up will appear:</p>
        <p>Web app in Telegram</p>

        <p>
          The TWA SDK provides you with many features. All you need to do is
          read the documentation, which teaches you many things. For example,
          how to specify the platform, color schemes, some theme parameters,
          make it expanded, and adjust the viewport height.
        </p>

        <p>
          Another interesting feature is managing buttons, the main button, and
          the back button. You can use these components and attach actions to
          them.
        </p>

        <p>
          You get many possibilities, and your web app becomes a very accessible
          app for Telegram. You can embed a lot of functionality into it and
          provide a great user experience.
        </p>

        <p>
          If I close the web app in Telegram, I will see that it’s still a chat.
          Therefore, if you want to create the best user experience for your app
          overall, you should use a hybrid approach: keep some features in the
          web app and others in the chat commands.
        </p>

        <p>
          In the next lesson, we will implement the same functionality with the
          "increment by 5", counter, as well as withdrawal and deposit requests.
        </p>

        <p>
          We will also add comments to the chat. You will decide what to use for
          your product.
        </p>

        <p>
          In any case, we will understand how everything works. We will also
          learn how to transfer information from the web app to the Telegram bot
          and create a bot that will manage this conversation.
        </p>

        <p>
          The web app handles the functionality. It authorizes the wallet,
          maintains the session. But the chat bot, as a separate app, will
          support the conversation with the user.
        </p>

        <p>
          A connection will need to be established between the web app and the
          Telegram chat bot. The web app will act as a business logic and
          interface, while the chat bot will be the intermediary between the web
          app and the user.
        </p>

        <p>
          It’s very important that you know the basics of working with TWA SDK.
        </p>

        <p>In the next lesson, we will implement the back end of the bot.</p>
      </div>
    </div>
  );
};
export const Lesson6_2 = () => {
  return (
    <div>
      <video controls playsInline>
        <source src="https://cdn.stepik.net/video/326943/1080/68b6596a40758e745bdf5046552fd7bd.mp4" />
      </video>
      <div></div>

      {/* Lesson Content */}
      <div>
        <h2>📚 Lesson Summary</h2>

        <p>
          How to create a bot in Telegram? It's very simple. You just need to
          message a special account in Telegram called BotFather. Today, we’ll
          create a bot, choose a name for it, and integrate our application into
          the menu button of this bot.
        </p>

        <p>
          In the BotFather chat, we click Start and see several options. Go to
          the menu and click Create a new bot. Then, we’re asked how we’d like
          to name our bot; let’s go with TON&CO Tutorial. Now, we need to choose
          a username. Bot usernames always end with "bot". If we try
          "tonandcotutorial" as a username, we’ll be asked to add the "bot"
          postfix, so I’ll name it "tonandcotutorialbot". You can come up with a
          better name for your project, but this works for testing.
        </p>

        <p>
          I received an HTTP API key, which we’ll need later, not in this or the
          next lesson. We’ll use it to create a command interface for the
          chatbot.
        </p>

        <p>
          Now go to the menu, click Edit your bots, select our bot, and go to
          Bot settings. In the bot settings, choose Menu button. Then, click
          Configure menu button. We’re asked to send the URL that will open when
          clicking on the bot's menu button. This is the link we got in the
          previous lesson after publishing our app on GitHub Pages:
        </p>

        <p>
          <a
            href="https://markokhman.github.io/first_contract_front_end/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://markokhman.github.io/first_contract_front_end/
          </a>
        </p>

        <p>
          Next, it asks for a label. Let’s simply name it Counter. This way, the
          user can click on Counter, and my app will open. Then, we can go back
          to the bot.
        </p>

        <p>
          Another point: in the bot settings, you can edit the name, "about"
          text, description, and even the picture. Editing commands allows you
          to have more than one button in the menu. You’ll have plenty of time
          to explore the bot’s features, but for now, we’ll focus on how our
          menu button will work.
        </p>

        <p>
          I open our bot and click the Start button. Here, I see the Counter
          button, and when I click on it, it asks if I agree to go to the
          website. I click OK, and the bot opens our application. There, I can
          set the height — this can be done using the SDK I mentioned.
        </p>

        <p>
          In our application, we click Connect Wallet. I choose Tonkeeper and
          receive a request to connect the wallet. Now that the wallet is
          connected, my app is also authorized. I close the counter, and when I
          open it again, it still retains the session because it’s a web
          application.
        </p>

        <p>
          But this is not just a simple web application: it offers us many
          possibilities for interacting with our bot. The bot interface can be
          very versatile and opens up a whole new level of functionality. So in
          the next lesson, we’ll learn more about the SDK, how to make it work
          even more effectively, and how to interact with Telegram itself.
        </p>

        <p>
          Later, we’ll also learn how to create cool chat interfaces that work
          with the web application we just created. The next two lessons will be
          very interesting.
        </p>
      </div>
    </div>
  );
};
export const Lesson6_1 = () => {
  return (
    <div>
      {/* Video Section */}

      {/* Lesson Content */}
      <div>
        <h2>💎 Welcome to Part Six!</h2>
        <p>
          In this chapter, we’ll look at various aspects of app distribution,
          TWA (Telegram Web App) packaging, SDK usage, and creating chatbots.
          These topics will be detailed throughout the chapter to give you a
          comprehensive understanding of this new approach to app distribution.
        </p>

        <h3>📚 Lesson Summary</h3>
        <p>
          In this chapter, we’ll explore a new way to distribute our app. We’ve
          published it on GitHub Pages, making it accessible to anyone on the
          internet via a browser. However, to make your app more user-friendly,
          it should be available in a familiar interface.
        </p>

        <p>
          A messenger is one of the best ways to do this. Let’s say one of your
          users shares your app with a friend or group of people. The easiest
          way to attract them is not to redirect them to a browser but to let
          them use your app natively. Telegram is an amazing messenger with
          unparalleled capabilities and ambitions. It truly brings value.
          Telegram has up to 700 million active users monthly and over 50
          million daily—a huge potential user base for your app!
        </p>

        <p>
          Telegram bots have long been an excellent way to program interactions
          with Telegram users. Telegram bots can fully replace any website. They
          support seamless authorization, integrated payments through 15 payment
          providers, including Google Pay and Apple Pay right out of the box,
          deliver personalized push notifications to users, and much more.
        </p>

        <p>
          With web apps—a recently introduced feature—bots are moving into a
          whole new dimension. Bot developers can create infinitely flexible
          interfaces using JavaScript, one of the world’s most popular
          programming languages. Although we are used to graphical interfaces
          for most tasks, the chat interface has become widely popular.
        </p>

        <p>
          We want our app to be seamlessly accessible to many users so they can
          easily share this experience with their friends. We’ll take the next
          step and set up our app as a web app on Telegram.
        </p>

        <h3>Diving into Telegram Web Apps</h3>
        <p>
          Let’s see what Telegram web apps look like. On Telegram’s main page,
          we go to the API and see the Bot API. Here, a new feature opens up:
          Telegram web apps. They work inside a bot but allow the creation of an
          embedded web interface.
        </p>

        <p>
          It can be used for many purposes: receiving payments, user scenarios,
          file processing, and performing specific tasks. You can also integrate
          it with other services, like GMail, as shown in the example. And you
          can even create games.
        </p>

        <p>
          Telegram web apps go beyond basic “request-response” interaction.
          That’s why it’s very important to master them—it will give you many
          advantages in any projects you want to launch.
        </p>

        <p>
          Let’s see how they are integrated. We move to the web apps section.
          We’ve already created our web app, and now we need to integrate it
          with this bot. Then we’ll be able to change the color scheme and
          language depending on the user’s device settings.
        </p>

        <h3>Telegram Web App Launch Options</h3>
        <p>
          The integration here is quite simple. The Telegram web app can be
          launched in a bot using a keyboard button, an inline button, or a bot
          menu button. In the following lessons, we’ll use the bot menu button.
          The web apps section is a very rich resource that allows you to
          practically explore Telegram web app capabilities.
        </p>

        <p>
          We’ve already created a web app accessible in the browser. Now we need
          to learn how to integrate it with the Telegram API. Telegram provides
          us with a script that we can simply load to access many functions like
          color scheme, platform, screen size detection, and so on.
        </p>

        <p>
          Now we need to integrate our app using the script. Let’s look for an
          SDK that will help us do this in React. Fortunately, we have one—the
          link will be available in the additional lesson materials. Just
          install this library:
        </p>

        <pre>
          <code>npm i @twa-dev/sdk</code>
        </pre>

        <p>
          It will give us easy access to the script’s methods. In the next
          lesson, we’ll create our bot, learn to integrate what we already have,
          and then improve our app to interact more effectively with the bot’s
          API.
        </p>
      </div>
    </div>
  );
};

export const Lesson4_1 = () => {
  return (
    <div>
      <h1>💎 Welcome to Part Four!</h1>
      <video controls playsInline>
        <source src="https://cdn.stepik.net/video/326910/1080/02618b878c737c51dc95e99065e50e5a.mp4" />
      </video>

      <p>
        In this chapter, we’ll cover various aspects of developing and deploying
        smart contracts. We’ll start by adding more complex logic to expand our
        smart contract’s functionality. Next, we’ll focus on updating and
        improving our tests to align with recent changes. We’ll implement
        advanced logic for deposits and withdrawals. Additionally, we’ll look at
        the initialization process of our existing contract, adding extensive
        test coverage. We’ll go through deploying the contract on the mainnet
        using Blueprint. Finally, we’ll equip you with the knowledge needed to
        effectively verify contract code. These lessons will give you a
        comprehensive understanding of smart contract development and the skills
        for successful deployment and verification.
      </p>

      <h2>Video should be here</h2>

      <h3>📚 Lesson Summary</h3>
      <p>
        Welcome to Chapter Four! Here, we’ll create increasingly complex logic
        in our smart contract, understand it, and write local tests using
        TypeScript.
      </p>

      <p>The final code for Chapter 4 is available in this repository.</p>

      <p>
        Let’s return to the contract code we wrote in the previous chapter. We
        will continue to build upon this contract.
      </p>

      <pre>
        <code>
          {`#include "imports/stdlib.fc";

() recv_internal(int msg_value, cell in_msg, slice in_msg_body) impure {
    slice cs = in_msg.begin_parse();
    int flags = cs~load_uint(4);
    slice sender_address = cs~load_msg_addr();

    set_data(begin_cell().store_slice(sender_address).end_cell());
}

slice get_the_latest_sender() method_id {
   slice ds = get_data().begin_parse();
   return ds~load_msg_addr();
}`}
        </code>
      </pre>

      <p>
        I’ll explain our plan for this lesson in more detail. We’ll rewrite our
        contract to have the following logic:
      </p>
      <ul>
        <li>
          The contract will receive a message with a specific command (commands
          are used to define which contract functions should execute with the
          data received in the message).
        </li>
        <li>
          Based on this specific command, the contract increments a number
          stored in our c4 storage.
        </li>
        <li>
          The contract provides a getter method that returns the current counter
          value and the address from which the message with the increment
          operation code was sent.
        </li>
      </ul>

      <p>
        We’re already familiar with data storage and getter methods, so this
        won’t be an issue, but rather good practice for our skills.
      </p>

      <p>
        However, the concept of commands is new for us. Commands are also called
        operation codes, or opcodes for short. Opcodes are usually stored at the
        very beginning of the in_msg_body slice, which is passed to the
        recv_internal function. An opcode is simply an integer used to designate
        a specific logic block. It’s standard practice, but opcodes don’t appear
        there automatically—they need to be included when composing the message
        before it’s sent.
      </p>

      <p>
        It’s important to note that when we read data, we must do so in the same
        order in which it was stored. To ensure get_data() works correctly on
        the first run, we’ll return to the concept of initial data, meaning
        we’ll store a specific value in c4 storage from the moment the contract
        is deployed.
      </p>

      <h4>Opcode</h4>
      <p>
        As mentioned, we’ll place the opcode at the very beginning of
        in_msg_body, so let’s write code to read it from there:
      </p>

      <pre>
        <code>
          {`#include "imports/stdlib.fc";

() recv_internal(int msg_value, cell in_msg, slice in_msg_body) impure {
    slice cs = in_msg.begin_parse();
    int flags = cs~load_uint(4);
    int opcode = cs~load_int(32);
    slice sender_address = cs~load_msg_addr();

    set_data(begin_cell().store_slice(sender_address).end_cell());
}

slice get_the_latest_sender() method_id {
   slice ds = get_data().begin_parse();
   return ds~load_msg_addr();
}`}
        </code>
      </pre>

      <p>
        Now we can see that opcode is simply an integer that identifies the
        command number. Next, we’ll write code to store it in the contract’s
        state, perform an action if opcode is equal to 1, and store this command
        in contract storage.
      </p>

      <pre>
        <code>
          {`#include "imports/stdlib.fc";

() recv_internal(int msg_value, cell in_msg, slice in_msg_body) impure {
    slice cs = in_msg.begin_parse();
    int flags = cs~load_uint(4);
    int opcode = cs~load_int(32);
    slice sender_address = cs~load_msg_addr();

    if (opcode == 1) {
       // Increment a value
    }

    set_data(begin_cell().store_slice(sender_address).end_cell());
}

slice get_the_latest_sender() method_id {
   slice ds = get_data().begin_parse();
   return ds~load_msg_addr();
}`}
        </code>
      </pre>
    </div>
  );
};
export const Lesson4_2 = () => {
  return (
    <div>
      <video controls playsInline>
        <source src="https://cdn.stepik.net/video/326911/1080/805774a83a646748efaf97cc5796dd63.mp4" />
      </video>

      <h1>📚 Lesson Notes</h1>
      <p>
        As I mentioned earlier, writing tests will be an important part of
        programming contracts in FunC. Let’s take a look at the tests we created
        in the previous chapter:
      </p>

      <pre>
        <code>
          {`import { Cell, toNano } from "ton-core";
import { hex } from "../build/main.compiled.json";
import { Blockchain } from "@ton-community/sandbox";
import { MainContract } from "../wrappers/MainContract";
import "@ton-community/test-utils";

describe("main.fc contract tests", () => {
  it("should get the proper most recent sender address", async () => {
    const blockchain = await Blockchain.create();
    const codeCell = Cell.fromBoc(Buffer.from(hex, "hex"))[0];

    const myContract = blockchain.openContract(
      await MainContract.createFromConfig({}, codeCell)
    );

    const senderWallet = await blockchain.treasury("sender");

    const sentMessageResult = await myContract.sendInternalMessage(
      senderWallet.getSender(),
      toNano("0.05")
    );

    expect(sentMessageResult.transactions).toHaveTransaction({
      from: senderWallet.address,
      to: myContract.address,
      success: true,
    });

    const data = await myContract.getData();

    expect(data.recent_sender.toString()).toBe(senderWallet.address.toString());
  });
});`}
        </code>
      </pre>

      <p>
        It should be noted that if we run yarn test now, it won’t work because
        our code has changed significantly. To fix this, we need to do the
        following:
      </p>
      <ul>
        <li>
          Provide the correct initial state data so that our storage c4 is
          prefilled with some data. We’ll provide 0 as the counter value and
          zeroAddress as the sender’s address (in line with our new contract
          logic).
        </li>
        <li>Send a specific opcode in the message body to the contract.</li>
      </ul>

      <p>
        Let’s understand the initial data. As you remember, we use the
        createFromConfig method to initialize our contract and set the initial
        data state of our contract as a simple empty cell like this:
      </p>

      <pre>
        <code>
          {`static createFromConfig(config: any, code: Cell, workchain = 0) {
    const data = beginCell().endCell();
    const init = { code, data };
    const address = contractAddress(workchain, init);

    return new MainContract(address, init);
}`}
        </code>
      </pre>

      <p>Then createFromConfig is called in main.spec.ts:</p>

      <pre>
        <code>
          {`const myContract = blockchain.openContract(
  await MainContract.createFromConfig({}, codeCell)
);`}
        </code>
      </pre>

      <p>
        Until now, we’ve been passing an empty object for the configuration. Now
        we’ll allow values to be passed that are needed to initialize our
        contract data.
      </p>

      <p>
        Now let’s define what our configuration should look like. Right after
        the imports in our wrappers/MainContract.ts, we’ll define a new type
        MainContractConfig.
      </p>

      <pre>
        <code>
          {`export type MainContractConfig = {
  number: number;
  address: Address;
};`}
        </code>
      </pre>

      <p>
        Another cool helper function we’ll implement in the same wrapper file is
        mainContractConfigToCell. It will take a MainContractConfig type object,
        correctly pack its parameters into a cell, and return it. We need this
        because c4 storage is a memory cell:
      </p>

      <pre>
        <code>
          {`export function mainContractConfigToCell(config: MainContractConfig): Cell {
  return beginCell().storeUint(config.number, 32).storeAddress(config.address).endCell();
}`}
        </code>
      </pre>

      <p>
        We’ll update createFromConfig in the same file, but inside the
        MainContract class. Now it should use the mainContractConfigToCell
        function to form the initial state data cell:
      </p>

      <pre>
        <code>
          {`export class MainContract implements Contract {
  constructor(
    readonly address: Address,
    readonly init?: { code: Cell; data: Cell }
  ) {}

  static createFromConfig(
    config: MainContractConfig,
    code: Cell,
    workchain = 0
  ) {
    const data = mainContractConfigToCell(config);
    const init = { code, data };
    const address = contractAddress(workchain, init);

    return new MainContract(address, init);
  }
}`}
        </code>
      </pre>

      <p>
        Now that our createFromConfig method is ready, let’s update its usage
        scenario in the tests/main.spec.ts file:
      </p>

      <pre>
        <code>
          {`describe("main.fc contract tests", () => {
  it("should get the proper most recent sender address", async () => {
    const blockchain = await Blockchain.create();
    const codeCell = Cell.fromBoc(Buffer.from(hex, "hex"))[0];

    const initAddress = await blockchain.treasury("initAddress");

    const myContract = blockchain.openContract(
      await MainContract.createFromConfig(
        {
          number: 0,
          address: initAddress.address,
        },
        codeCell
      )
    );
  });
});`}
        </code>
      </pre>

      <p>
        At this point, we’ve successfully initialized our contract!
        Congratulations :)
      </p>

      <p>
        Now we’re going to send specific data in the message body, let’s update
        the sendInternalMessage method in our wrappers/MainContract.ts. We’ll
        rename it to sendIncrement, and now it will accept another value —
        increment_by. This will be the number by which the current contract
        storage value will be increased.
      </p>

      <pre>
        <code>
          {`async sendIncrement(
    provider: ContractProvider,
    sender: Sender,
    value: bigint,
    increment_by: number
  ) {
    const msg_body = beginCell()
      .storeUint(1, 32) // OP code
      .storeUint(increment_by, 32) // increment_by value
      .endCell();

    await provider.internal(sender, {
      value,
      sendMode: SendMode.PAY_GAS_SEPARATELY,
      body: msg_body,
    });
  }`}
        </code>
      </pre>

      <p>
        Another method that needs updating in our wrapper is getData. As you
        remember, we renamed the getter method, and now it returns two values.
        Let’s adjust our wrapper method:
      </p>

      <pre>
        <code>
          {`async getData(provider: ContractProvider) {
    const { stack } = await provider.get("get_contract_storage_data", []);
    return {
      number: stack.readNumber(),
      recent_sender: stack.readAddress(),
    };
  }`}
        </code>
      </pre>

      <p>
        Now we’re ready to go back to our tests/main.spec.ts and start
        finalizing the test. Here’s the updated code:
      </p>

      <pre>
        <code>
          {`describe("main.fc contract tests", () => {
  it("should successfully increase counter in contract and get the proper most recent sender address", async () => {
    const blockchain = await Blockchain.create();
    const codeCell = Cell.fromBoc(Buffer.from(hex, "hex"))[0];

    const initAddress = await blockchain.treasury("initAddress");

    const myContract = blockchain.openContract(
      await MainContract.createFromConfig(
        {
          number: 0,
          address: initAddress.address,
        },
        codeCell
      )
    );

    const senderWallet = await blockchain.treasury("sender");

    const sentMessageResult = await myContract.sendIncrement(
      senderWallet.getSender(),
      toNano("0.05"),
      1
    );

    expect(sentMessageResult.transactions).toHaveTransaction({
      from: senderWallet.address,
      to: myContract.address,
      success: true,
    });

    const data = await myContract.getData();

    expect(data.recent_sender.toString()).toBe(senderWallet.address.toString());
    expect(data.number).toEqual(1);
  });
});`}
        </code>
      </pre>

      <p>What did we change here?</p>
      <ul>
        <li>
          We now pass the number 1 to the sendIncrement method, so our resulting
          value should be increased by 1.
        </li>
        <li>We set expectations for the recent_sender and number values.</li>
      </ul>

      <p>
        Now we can run our test using the yarn test command. If you did
        everything right, you’ll see the following in the terminal:
      </p>

      <pre>
        <code>
          {`PASS  tests/main.spec.ts
main.fc contract tests
  ✓ should successfully increase counter in contract and get the proper most recent sender address (452 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        4.339 s, estimated 5 s`}
        </code>
      </pre>

      <p>
        Hooray, our counter contract is tested as needed. Can’t wait for you to
        run it and test it on the real network ;)
      </p>
    </div>
  );
};

export const Lesson4_3 = () => {
  return (
    <div>
      <video controls playsInline>
        <source src="https://cdn.stepik.net/video/326942/1080/9ff289946bfae8e2ff35f98e8bda9e1a.mp4" />
      </video>
      <h1>📚 Lesson Summary</h1>
      <p>
        In this lesson, we will practice implementing various commands, creating
        functions, and even sending messages from a contract. We will be
        building upon our existing contract to accomplish this.
      </p>

      <h2>Let's go over the lesson plan.</h2>
      <ul>
        <li>
          Our contract will become stricter with commands, as we will introduce
          a new opcode for depositing funds into the contract;
        </li>
        <li>
          We will add another opcode for withdrawal. In the process, funds are
          actually sent to an address as a message, so we will learn how to send
          messages from the contract.
        </li>
        <li>
          Any funds received with unknown operation codes will be returned to
          the sender.
        </li>
        <li>
          We will introduce a new value in our storage — the contract owner.
          Only the contract owner will be able to withdraw funds. We will also
          separate loading the storage and entering function logic to keep our
          main code clean.
        </li>
      </ul>

      <h3>Ready, Set, Go!</h3>
      <p>Separating the storage management logic</p>

      <p>
        First, let’s work with storing the contract owner data. (Don’t forget
        that we’ll need to add this address to the storage when initializing the
        contract.) To do this, we’ll create two new functions — `load_data` and
        `save_data`:
      </p>

      <pre>
        <code>
          {`(int, slice, slice) load_data() inline {
  var ds = get_data().begin_parse();
  return (
    ds~load_uint(32), ;; counter_value
    ds~load_msg_addr(), ;; the most recent sender
    ds~load_msg_addr() ;; owner_address
  );
}

() save_data(int counter_value, slice recent_sender, slice owner_address) impure inline {
  set_data(begin_cell()
    .store_uint(counter_value, 32) ;; counter_value
    .store_slice(recent_sender) ;; the most recent sender
    .store_slice(owner_address) ;; owner_address
    .end_cell());
}`}
        </code>
      </pre>

      <p>There are two things to pay attention to here:</p>
      <ul>
        <li>
          Inline specifier. You already know a little about specifiers. If a
          function is inline, its code is effectively substituted everywhere
          it’s called. Recursive calls in inline functions are prohibited.
        </li>
        <li>
          Why doesn’t `load_data()` have an impure function specifier? We
          mentioned this in Chapter 3, but let's recap. The reason is that this
          function doesn’t alter the contract’s state. It’s only intended for
          reading.
        </li>
      </ul>

      <h3>New opcodes</h3>
      <p>
        Let’s look at how our storage management functions are placed in the
        code and introduce additional operation codes, setting up error handling
        if an operation code is unknown to our contract:
      </p>

      <pre>
        <code>
          {`#include "imports/stdlib.fc";

(int, slice, slice) load_data() inline {
  var ds = get_data().begin_parse();
  return (
    ds~load_uint(32), ;; counter_value
    ds~load_msg_addr(), ;; the most recent sender
    ds~load_msg_addr() ;; owner_address
  );
}

() save_data(int counter_value, slice recent_sender, slice owner_address) impure inline {
  set_data(begin_cell()
    .store_uint(counter_value, 32) ;; counter_value
    .store_slice(recent_sender) ;; the most recent sender
    .store_slice(owner_address) ;; owner_address
    .end_cell());
}

() recv_internal(int msg_value, cell in_msg, slice in_msg_body) impure {
  slice cs = in_msg.begin_parse();
  int flags = cs~load_uint(4);
  slice sender_address = cs~load_msg_addr();

  int op = in_msg_body~load_uint(32);

  var (counter_value, recent_sender, owner_address) = load_data();
    
  if (op == 1) {
    save_data(counter_value + 1, sender_address, owner_address);
    return();
  }

  if (op == 2) {
    ;; deposit
  }

  if (op == 3) {
    ;; withdrawal
  }

  throw(777);
}

(int, slice, slice) get_contract_storage_data() method_id {
  var (counter_value, recent_sender, owner_address) = load_data();
  return (
    counter_value,
    recent_sender,
    owner_address
  );
}`}
        </code>
      </pre>

      <p>Some key points to consider:</p>
      <ul>
        <li>
          We also updated the `get_the_latest_sender` function to return the
          owner’s address.
        </li>
        <li>
          If the opcode read from the message body doesn’t match any of the `if`
          statements, we throw an error with code 777. You can choose this
          number, but make sure it doesn’t overlap with official error codes. An
          exit_code greater than 1 is considered an error code, so ending with
          such a code could lead to a transaction rollback/failure.
        </li>
        <li>We use `return()` for a successful contract execution.</li>
      </ul>

      <h3>Depositing and withdrawing funds</h3>
      <p>
        For a deposit (op == 2), things are straightforward, as in this case, we
        simply complete execution successfully, so funds are accepted.
        Otherwise, the funds will be returned to the sender.
      </p>

      <pre>
        <code>
          {`if (op == 2) {
    return();
}`}
        </code>
      </pre>

      <p>
        However, withdrawing funds is a bit more complex. We need to compare the
        sender’s address with the contract owner’s address. Let’s go over the
        details to implement this logic:
      </p>
      <ul>
        <li>
          To compare the owner’s and sender’s addresses, we use the standard
          FunC function `equal_slice_bits()`.
        </li>
        <li>
          We use `throw_unless()` to throw an error if the comparison result is
          false. There’s also another way to throw an error — `throw_if()`. It
          throws an error if the condition passed to this function returns true.
        </li>
        <li>
          The message body with this operation should contain an integer
          indicating the amount requested for withdrawal. We compare this amount
          with the contract’s actual balance (using the standard FunC function
          `get_balance()`).
        </li>
        <li>
          We need to set a minimum amount that must remain in the contract and
          throw an error if the requested amount doesn't allow for this.
        </li>
      </ul>

      <p>Let’s see how this works:</p>

      <pre>
        <code>
          {`const const::min_tons_for_storage = 10000000; ;; 0.01 TON

if (op == 3) {
    throw_unless(103, equal_slice_bits(sender_address, owner_address));

    int withdraw_amount = in_msg_body~load_coins();
    var [balance, _] = get_balance();
    throw_unless(104, balance >= withdraw_amount);

    int return_value = min(withdraw_amount, balance - const::min_tons_for_storage);
    
    ;; TODO: Sending internal message with funds
    
    return();
}`}
        </code>
      </pre>

      <h3>Sending internal messages</h3>
      <p>
        `send_raw_message` is a standard function that takes a cell with the
        message and an integer containing the mode and flag sum. There are
        currently 3 modes and 3 flags for messages.
      </p>

      <pre>
        <code>
          {`var msg = begin_cell()
    .store_uint(0x18, 6)
    .store_slice(addr)
    .store_coins(grams)
    .store_uint(0, 1 + 4 + 4 + 64 + 32 + 1 + 1)
    .store_uint(op_code, 32)
    .store_uint(query_id, 64);
    
send_raw_message(msg.end_cell(), mode);`}
        </code>
      </pre>

      <p>Let’s break down what’s happening here:</p>
      <ul>
        <li>
          We start creating a cell by converting the value 0x18 into 6 bits.
          This indicates certain flags and modes for the message.
        </li>
        <li>
          We serialize the recipient address, the amount of coins, and other
          message parameters.
        </li>
      </ul>

      <h3>Finalizing contract code</h3>
      <p>
        Lastly, we’ll add handling for withdrawal operations and messages for
        successful operations. It’s also important to note that contracts can
        only return funds to their owners, so make sure to check who is
        requesting them!
      </p>
    </div>
  );
};

export const Lesson4_4 = () => {
  return (
    <div>
      <h2>📚 Lesson Summary</h2>
      <p>In this lesson, we will write quite a few interesting tests.</p>

      <p>
        First, we will update the initialization process for the previously
        written contract because we introduced a new variable that must be
        stored in storage c4.
      </p>

      <p>
        If you try running our test now with <code>yarn test</code>, you’ll see
        that the test fails. You’ll also see the transaction traces that
        occurred with our contract. One of them will have error code 9. Check
        the documentation to see what this means.
      </p>

      <pre>
        9 - Cell not filled. The read primitive from slice attempted to read
        more bits or references than are actually present.
      </pre>

      <p>Updating the contract wrapper:</p>
      <pre>
        // ...library imports export type MainContractConfig = {"{"}
        <br />
        number: number;
        <br />
        address: Address;
        <br />
        owner_address: Address;
        <br />
        {"}"}
        <br />
        export function mainContractConfigToCell(config: MainContractConfig):
        Cell {"{"}
        <br />
        return beginCell()
        <br />
        .storeUint(config.number, 32)
        <br />
        .storeAddress(config.address)
        <br />
        .storeAddress(config.owner_address)
        <br />
        .endCell();
        <br />
        {"}"}
        <br />
        // ...contact wrapper class
      </pre>

      <p>
        Another thing to update in the wrapper file is the getData method so it
        returns the owner’s address. We’ll also create a new getBalance method
        to check that the balance has increased after replenishment.
      </p>

      <pre>
        async getData(provider: ContractProvider) {"{"}
        <br />
        const {"{"} stack {"}"} = await
        provider.get("get_contract_storage_data", []);
        <br />
        return {"{"}
        <br />
        number: stack.readNumber(),
        <br />
        recent_sender: stack.readAddress(),
        <br />
        owner_address: stack.readAddress(),
        <br />
        {"}"};<br />
        {"}"}
        <br />
        async getBalance(provider: ContractProvider) {"{"}
        <br />
        const {"{"} stack {"}"} = await provider.get("balance", []);
        <br />
        return {"{"}
        <br />
        number: stack.readNumber(),
        <br />
        {"}"};<br />
        {"}"}
        <br />
      </pre>

      <p>
        We will introduce a new fund storage, which will effectively be the
        owner of the contract. Only this owner will be able to withdraw funds in
        the future. Updating <code>tests/main.spec.ts</code>:
      </p>

      <pre>
        {`// ...library imports
        describe("main.fc contract tests", () => {'{'}<br />
        it("should get the proper most recent sender address", async () => {'{'}<br />
        const blockchain = await Blockchain.create();<br />
        const codeCell = Cell.fromBoc(Buffer.from(hex, "hex"))[0];<br />

        const initAddress = await blockchain.treasury("initAddress");<br />
        const ownerAddress = await blockchain.treasury("ownerAddress");<br />

        const myContract = blockchain.openContract(<br />
        await MainContract.createFromConfig(<br />
        {'{'}<br />
        number: 0,<br />
        address: initAddress.address,<br />
        owner_address: ownerAddress.address, // now we create myContract from 3 parameters<br />
        {'}'}<br />
        , codeCell<br />
        )<br />
        );<br />
        // ...rest of testing code`}
      </pre>

      <p>
        Now everything is fine, <code>yarn test</code> ends successfully.
        Testing fund deposit.
      </p>

      <p>
        Let’s add a few more tests to our <code>main.spec.ts</code> file.
      </p>

      <pre>
        {`// We need to additionally import SandboxContract and TreasuryContract<br />
        import {'{'} Blockchain, SandboxContract, TreasuryContract {'}'} from "@ton/sandbox";<br />
        // ... other library imports
        describe("main.fc contract tests", () => {'{'}<br />
        let blockchain: Blockchain;<br />
        let myContract: SandboxContract&lt;MainContract&gt;;<br />
        let initWallet: SandboxContract&lt;TreasuryContract&gt;;<br />
        let ownerWallet: SandboxContract&lt;TreasuryContract&gt;;<br />
        
        beforeEach(async () => {'{'}<br />
        blockchain = await Blockchain.create();<br />
        initWallet = await blockchain.treasury("initWallet");<br />
        ownerWallet = await blockchain.treasury("ownerWallet");<br />

        const codeCell = Cell.fromBoc(Buffer.from(hex, "hex"))[0];<br />

        myContract = blockchain.openContract(<br />
        await MainContract.createFromConfig(<br />
        {'{'}<br />
        number: 0,<br />
        address: initWallet.address,<br />
        owner_address: ownerWallet.address,<br />
        {'}'}<br />
        , codeCell<br />
        )<br />
        );<br />
        {'}'}<br />
        
        it("should get the proper most recent sender address", async () => {'{'}<br />
        const senderWallet = await blockchain.treasury("sender");<br />

        const sentMessageResult = await myContract.sendIncrement(<br />
        senderWallet.getSender(),<br />
        toNano("0.05"),<br />
        1<br />
        );<br />

        expect(sentMessageResult.transactions).toHaveTransaction({'{'}<br />
        from: senderWallet.address,<br />
        to: myContract.address,<br />
        success: true,<br />
        {'}'});<br />

        const data = await myContract.getData();<br />

        expect(data.recent_sender.toString()).toBe(senderWallet.address.toString());<br />
        expect(data.number).toEqual(1);<br />
        {'}'});`}
        <br />
      </pre>

      <p>
        We simply moved some lines from the first test to{" "}
        <code>beforeEach</code>, and the remaining lines should stay inside the
        first <code>it</code> test.
      </p>

      <p>
        Let’s write a test for depositing funds. We’ll send a message with{" "}
        <code>op == 2</code> and then check the balance. As usual, we’ll first
        create a wrapper method, calling it <code>sendDeposit</code>:
      </p>

      <pre>
        async sendDeposit(provider: ContractProvider, sender: Sender, value:
        bigint) {"{"}
        <br />
        const msg_body = beginCell()
        <br />
        .storeUint(2, 32) // OP code
        <br />
        .endCell();
        <br />
        await provider.internal(sender, {"{"}
        <br />
        value,
        <br />
        sendMode: SendMode.PAY_GAS_SEPARATELY,
        <br />
        body: msg_body,
        <br />
        {"}"});
        <br />
        {"}"}
        <br />
      </pre>

      <p>
        We won’t go into details about this method, as it’s very simple: we’re
        just passing the operation code inside the message body.
      </p>

      <pre>
        {`it("successfully deposits funds", async () => {'{'}<br />
        const senderWallet = await blockchain.treasury("sender");<br />

        const depositMessageResult = await myContract.sendDeposit(<br />
        senderWallet.getSender(),<br />
        toNano("5")<br />
        );<br />

        expect(depositMessageResult.transactions).toHaveTransaction({'{'}<br />
        from: senderWallet.address,<br />
        to: myContract.address,<br />
        success: true,<br />
        {'}'});<br />

        const balanceRequest = await myContract.getBalance();<br />

        expect(balanceRequest.number).toBeGreaterThan(toNano("4.99"));<br />
        {'}'});`}
        <br />
      </pre>

      <p>
        Note: we’re checking that the contract balance is greater than 4.99 TON
        because we know that part of the funds will be lost to fees.
      </p>

      <video controls playsInline>
        <source src="https://cdn.stepik.net/video/326913/1080/3b72ef0a4d650d0ffe529e26926c61d0.mp4" />
      </video>
    </div>
  );
};

export const Lesson5_3 = () => {
  return (
    <div>
      <video controls playsInline>
        <source src="https://cdn.stepik.net/video/326920/1080/e78a3ca85d47d08c2585ab0b5aefddda.mp4" />
      </video>
      <h2>📚 Lesson Summary</h2>
      <p>
        At this point, we have already implemented user authorization to
        interact with our contract. Now let's connect the DApp to the contract
        we developed earlier.
      </p>
      <p>
        There are a few requirements to consider to correctly implement the
        steps in this and subsequent lessons:
      </p>
      <ul>
        <li>
          We will work with the testnet. Ensure that your contract from lesson 5
          of chapter 4 is deployed on the testnet.
        </li>
        <li>
          Ensure that you have deployed this contract with the necessary initial
          data, specifically:
        </li>
        <ul>
          <li>number == 0</li>
          <li>address == your wallet address</li>
          <li>owner_address == your wallet address</li>
        </ul>
        <li>
          There are several ways to deploy a contract in the testnet
          environment. We recommend checking documentation and using testnet
          TONs.
        </li>
      </ul>
    </div>
  );
};
export const Lesson4_5 = () => {
  return (
    <div>
      <h1>📚 Lesson Summary</h1>
      <p>
        At the beginning of our journey into programming in FunC, we mentioned
        that there is a great library/tool called Blueprint. Blueprint was
        developed by the TonTech team and is officially supported by the TON
        Foundation.
      </p>
      <p>
        Throughout the lessons, we created our own scripts from scratch so that
        you could understand what exactly happens under the hood in projects
        created with Blueprint. Now, I recommend starting each new project with
        the following command:
      </p>
      <code>npm create ton@latest</code>
      <p>
        This command, using Blueprint, will generate a new project for you that
        includes code for all the stages of contract development that we covered
        in the third chapter.
      </p>
      <p>
        In this chapter, we will not optimize our project to work the same way
        as projects generated by Blueprint. Instead, we will slightly update our
        project in terms of compilation and deployment, so that it uses
        components imported from Blueprint.
      </p>
      <h2>Delegate Blueprint Compilation</h2>
      <p>
        First, we will need to update the package.json file. From this point on,
        we will keep only one script in it — test. We do this because, as
        mentioned before, compilation and deployment will be handled by
        components imported from Blueprint.
      </p>
      <code>{`"scripts": {"test": "jest" }`}</code>
      <p>
        However, if we run yarn test now, the command will just start the tests
        on the contract without compiling it first. Let's fix this.
      </p>
      <p>
        As I mentioned, we will use a set of compilers from Blueprint, so let's
        install this amazing library:
      </p>
      <code>yarn add @ton/blueprint --dev</code>
      <p>
        In the file tests/main.spec.ts, we need to make a few important updates.
        Here’s how it looked earlier (we show only the beginning part, before
        the actual tests):
      </p>
      <pre>
        {`
import { Cell, toNano } from "@ton/core";
import { hex } from "../build/main.compiled.json";
import { Blockchain, SandboxContract, TreasuryContract } from "@ton/sandbox";
import { MainContract } from "../wrappers/MainContract";
import "@ton/test-utils";

describe("main.fc contract tests", () => {
  let blockchain: Blockchain;
  let myContract: SandboxContract<MainContract>;
  let initWallet: SandboxContract<TreasuryContract>;
  let ownerWallet: SandboxContract<TreasuryContract>;

  beforeEach(async () => {
    blockchain = await Blockchain.create();
    initWallet = await blockchain.treasury("initWallet");
    ownerWallet = await blockchain.treasury("ownerWallet");

    const codeCell = Cell.fromBoc(Buffer.from(hex, "hex"))[0];

    myContract = blockchain.openContract(
      await MainContract.createFromConfig(
        {
          number: 0,
          address: initWallet.address,
          owner_address: ownerWallet.address,
        },
        codeCell
      )
    );
  });
  // ... the rest of testing code
});
        `}
      </pre>
      <p>
        Let's make 3 changes to it:
        <ul>
          <li>Import the compile function from the @ton-blueprint library.</li>
          <li>
            Implement the beforeAll hook from jest to compile the code and
            provide it to the other hooks and tests.
          </li>
          <li>
            Update the beforeEach hook to use the code cell from the beforeAll
            hook.
          </li>
        </ul>
      </p>
      <p>Here’s how our code will look after the changes:</p>
      <pre>
        {`
import { compile } from "@ton/blueprint";

describe("main.fc contract tests", () => {
  let blockchain: Blockchain;
  let myContract: SandboxContract<MainContract>;
  let initWallet: SandboxContract<TreasuryContract>;
  let ownerWallet: SandboxContract<TreasuryContract>;
  let codeCell: Cell;

  beforeAll(async () => {
    codeCell = await compile("MainContract");
  });

  beforeEach(async () => {
    blockchain = await Blockchain.create();
    initWallet = await blockchain.treasury("initWallet");
    ownerWallet = await blockchain.treasury("ownerWallet");

    myContract = blockchain.openContract(
      await MainContract.createFromConfig(
        {
          number: 0,
          address: initWallet.address,
          owner_address: ownerWallet.address,
        },
        codeCell
      )
    );
  });
  
  // ... the rest of testing code
});
        `}
      </pre>
      <h2>Delegate Blueprint Deployment</h2>
      <p>
        The next thing we need to do is update our deployment script using the
        superpowers of Blueprint. I should clarify that we will use our wrapper
        MainContract and its .createFromConfig method. This will allow us to
        easily set the initial state of our contract before deployment.
      </p>
      <p>
        In this lesson, we will again use the Tonhub wallet for the testnet and
        mainnet. You will be prompted to scan a QR code and authorize your
        application to interact with the wallet (transaction requests).
      </p>
      <p>
        Congratulations! You have learned another way to deploy contracts — and
        it's quite efficient! :)
      </p>
    </div>
  );
};

export const Lesson5_5 = () => {
  return (
    <div>
      <video controls playsInline>
        <source src="https://cdn.stepik.net/video/326914/1080/1e83cf3fe36c424aaa9721ba459d0015.mp4" />
      </video>
      <h1>📚 Lesson Summary</h1>
      <p>
        At the beginning of our journey into programming in FunC, we mentioned
        that there is a great library/tool called Blueprint. Blueprint was
        developed by the TonTech team and is officially supported by the TON
        Foundation.
      </p>
      <p>
        Throughout the lessons, we created our own scripts from scratch so that
        you could understand what exactly happens under the hood in projects
        created with Blueprint. Now, I recommend starting each new project with
        the following command:
      </p>
      <code>npm create ton@latest</code>
      <p>
        This command, using Blueprint, will generate a new project for you that
        includes code for all the stages of contract development that we covered
        in the third chapter.
      </p>
      <p>
        In this chapter, we will not optimize our project to work the same way
        as projects generated by Blueprint. Instead, we will slightly update our
        project in terms of compilation and deployment, so that it uses
        components imported from Blueprint.
      </p>
      <h2>Delegate Blueprint Compilation</h2>
      <p>
        First, we will need to update the package.json file. From this point on,
        we will keep only one script in it — test. We do this because, as
        mentioned before, compilation and deployment will be handled by
        components imported from Blueprint.
      </p>
      <code>{`"scripts": {"test": "jest" }`}</code>
      <p>
        However, if we run yarn test now, the command will just start the tests
        on the contract without compiling it first. Let's fix this.
      </p>
      <p>
        As I mentioned, we will use a set of compilers from Blueprint, so let's
        install this amazing library:
      </p>
      <code>yarn add @ton/blueprint --dev</code>
      <p>
        In the file tests/main.spec.ts, we need to make a few important updates.
        Here’s how it looked earlier (we show only the beginning part, before
        the actual tests):
      </p>
      <pre>
        {`
import { Cell, toNano } from "@ton/core";
import { hex } from "../build/main.compiled.json";
import { Blockchain, SandboxContract, TreasuryContract } from "@ton/sandbox";
import { MainContract } from "../wrappers/MainContract";
import "@ton/test-utils";

describe("main.fc contract tests", () => {
  let blockchain: Blockchain;
  let myContract: SandboxContract<MainContract>;
  let initWallet: SandboxContract<TreasuryContract>;
  let ownerWallet: SandboxContract<TreasuryContract>;

  beforeEach(async () => {
    blockchain = await Blockchain.create();
    initWallet = await blockchain.treasury("initWallet");
    ownerWallet = await blockchain.treasury("ownerWallet");

    const codeCell = Cell.fromBoc(Buffer.from(hex, "hex"))[0];

    myContract = blockchain.openContract(
      await MainContract.createFromConfig(
        {
          number: 0,
          address: initWallet.address,
          owner_address: ownerWallet.address,
        },
        codeCell
      )
    );
  });
  // ... the rest of testing code
});
        `}
      </pre>
      <p>
        Let's make 3 changes to it:
        <ul>
          <li>Import the compile function from the @ton-blueprint library.</li>
          <li>
            Implement the beforeAll hook from jest to compile the code and
            provide it to the other hooks and tests.
          </li>
          <li>
            Update the beforeEach hook to use the code cell from the beforeAll
            hook.
          </li>
        </ul>
      </p>
      <p>Here’s how our code will look after the changes:</p>
      <pre>
        {`
import { compile } from "@ton/blueprint";

describe("main.fc contract tests", () => {
  let blockchain: Blockchain;
  let myContract: SandboxContract<MainContract>;
  let initWallet: SandboxContract<TreasuryContract>;
  let ownerWallet: SandboxContract<TreasuryContract>;
  let codeCell: Cell;

  beforeAll(async () => {
    codeCell = await compile("MainContract");
  });

  beforeEach(async () => {
    blockchain = await Blockchain.create();
    initWallet = await blockchain.treasury("initWallet");
    ownerWallet = await blockchain.treasury("ownerWallet");

    myContract = blockchain.openContract(
      await MainContract.createFromConfig(
        {
          number: 0,
          address: initWallet.address,
          owner_address: ownerWallet.address,
        },
        codeCell
      )
    );
  });
  
  // ... the rest of testing code
});
        `}
      </pre>
      <h2>Delegate Blueprint Deployment</h2>
      <p>
        The next thing we need to do is update our deployment script using the
        superpowers of Blueprint. I should clarify that we will use our wrapper
        MainContract and its .createFromConfig method. This will allow us to
        easily set the initial state of our contract before deployment.
      </p>
      <p>
        In this lesson, we will again use the Tonhub wallet for the testnet and
        mainnet. You will be prompted to scan a QR code and authorize your
        application to interact with the wallet (transaction requests).
      </p>
      <p>
        Congratulations! You have learned another way to deploy contracts — and
        it's quite efficient! :)
      </p>
    </div>
  );
};
export const Lesson4_6 = () => (
  <div>
    <video controls playsInline>
      <source src="https://cdn.stepik.net/video/326915/1080/9cdf67c8e40c7ccfa0a89b60f9750939.mp4" />
    </video>
    <h3>📚 Lesson Summary</h3>
    <p>
      Now that our contract is deployed on the mainnet, we can begin checking
      the contract code. As we discussed in the previous lesson, it is crucial
      to ensure that the users of your contract know exactly what will happen to
      their funds when they send them to the contract address.
    </p>
    <p>
      As you can see in the explorer after sending your contract to the mainnet,
      the contract code is not verified. In a verified contract, anyone who
      wants to know the logic of the contract can easily read it. How do we do
      that?
    </p>
    <h4>Uploading the Contract to TON Verifier</h4>
    <p>
      Recently, TON received a very important tool—TON Verifier. Here, you
      upload your source code, it gets compiled, the code cell is formatted, and
      its hash becomes proof that the code hasn't changed.
    </p>
    <p>
      This code and its hash cell are subsequently stored in a decentralized
      manner, so any user can check the source code and verify that it hasn't
      been altered. There's no need to guarantee code consistency here. There is
      no centralized authority—it's simply a registry controlled by several
      people who can confirm the immutability of your code.
    </p>
    <p>
      Now, we'll connect our wallet, upload the code, and create a transaction
      for its decentralized storage in IPFS or another service "under the hood."
      In this and the next lessons, we will use the Tonkeeper wallet so you can
      get familiar with different wallets.
    </p>
    <p>
      TON Verifier is currently working on the mainnet, so we will test the
      contract in a production environment. Usually, you do this only once when
      deploying the final contract. You don't need to worry about spending money
      on this—it’s similar to purchasing an SSL certificate. In fact, you are
      paying to provide your contract data on the blockchain so that explorers
      can access your code.
    </p>
    <p>
      Let's begin. I scan the QR code using my Tonkeeper wallet on the mainnet
      and allow TON Verifier to request transactions. Now, we'll copy the
      address of the contract we deployed on the mainnet and paste it into the
      TON Verifier search bar.
    </p>
    <p>QR code to scan</p>
    <p>
      As we can see, the contract is obviously not verified. Now we need to
      provide TON Verifier with the source code (.func in our case) of our
      contract. To do this, open the project folder, find the `contracts`
      subfolder, and select the `main.fc` file. Then, upload `stdlib.fc` from
      the `imports` subfolder—otherwise, you'll get an error during compilation.
      Finally, specify the directory of `stdlib.fc` on the web page (in our
      case, it’s `imports`) and click Compile.
    </p>
    <p>
      If successful, you will see the message: “Great! Compile output hash
      matches this on-chain contract.” (Great! Compile output hash matches this
      on-chain contract). Click Publish. Then Tonkeeper will ask for transaction
      confirmation. As mentioned, this will cost a little, 0.5 TON. After
      confirming the transaction, it will take some time for the changes to
      propagate through the network.
    </p>
    <p>
      Once our verification results are published, we can click View Verified
      Contract and see our verified source code. Now anyone who wants to
      interact with our contract will be able to view its source code. TON
      Verifier also allows us to run getter methods and retrieve balance data.
    </p>
    <p>
      Now in explorers, our source code is marked as verified. It will take a
      few minutes for the code to be distributed in the decentralized registry,
      as I mentioned earlier. After that, our code will be readable by any user.
      We can verify it again with another explorer, like TON API.
    </p>
    <p>
      Great! Now our contract is verified, and we’re ready to create the
      frontend for interacting with our contract. We deployed it on the mainnet
      to show how it works in real-world projects. In the next chapter, we’ll
      also deploy this contract on the testnet since we’re going to do a lot of
      testing and create the frontend for this contract.
    </p>
    <h4>Deploying to Testnet</h4>
    <p>
      As you recall from the previous lesson, deploying to the testnet is quite
      simple. This command will help you:
    </p>
    <pre>
      <code>yarn blueprint run</code>
    </pre>
    <p>
      In response, I will be asked which network I want to deploy the contract
      to. I choose the testnet. Then, I select the wallet type— a TON
      Connect-compatible mobile wallet, as we'll authorize frontend actions via
      TonConnect transactions.
    </p>
    <p>
      For this deployment, I will also use Tonkeeper. With a QR code, I will
      authorize Tonkeeper to work with my local project. I confirm the
      transaction. Then, the deployment transaction is sent, I confirm it,
      and... amazing! The contract is deployed.
    </p>
    <p>
      We need to do one more thing. In the following chapters, we will create
      the frontend for our contract. And we don’t want to spend real mainnet
      money on testing all the interactions we’ll work with. So we need our
      contract to work with testnet addresses.
    </p>
    <p>
      Let’s change the very last address and the test wallet owner’s address
      currently connected to my Tonkeeper:
    </p>
    <pre>
      <code>
        {`const myContract = MainContract.createFromConfig(
  {
    number: 0, //initial value of the counter
    address: address("KQBMjM3cGuQ315MLsdqw/wEat26aG1a2b0DFHMIschNfp5R-K"),
    owner_address: address("KQBM;M3cGuQ31SMLsdqwwEat26aG1a2b0DFHMIScnNfp5R-K"),
  },
);`}
      </code>
    </pre>
    <p>
      Essentially, I’m going to change the initial state, so the deployment
      address should be different. And of course, it will be on the testnet. I
      will deploy the contract on the testnet with these new addresses. Consider
      this preparation for the next chapter, where we’ll create the frontend.
    </p>
    <p>Let’s repeat the command we used earlier:</p>
    <pre>
      <code>yarn blueprint run</code>
    </pre>
    <p>
      I choose testnet, then Tonhub wallet, as we did with previous deployments.
      Now, I scan the QR code to open TonHub’s test network. There, I confirm
      the transaction and wait for my contract to be deployed on the testnet.
      Hooray, it’s deployed, and we can find its address in the explorer.
    </p>
    <p>
      We don’t need to verify it here, we’ll mainly use it for testing. Save the
      contract address you see in the explorer—it will be needed for creating
      the frontend in the next lessons.
    </p>
    <p>I’m excited about what’s coming next!</p>
  </div>
);
export const Lesson5_1 = () => (
  <div>
    <h2>💎 Welcome to the fifth part!</h2>
    <p>
      In the first lessons, we will set up our dApp project (decentralized
      application) and implement the necessary TonConnect functionality. Then we
      will move on to studying how to interact with our contract through real
      transactions. In the conclusion of this chapter, we will discuss the
      process of publishing our dApp on GitHub Pages.
    </p>

    <h3>📚 Lesson Summary</h3>
    <p>
      In the previous chapter, we created a smart contract with a counter
      function as well as functions for depositing/withdrawing funds. This smart
      contract serves as the backend for our application. In this lesson, we
      will develop the frontend, or user interface, allowing end users to
      interact with the smart contract via a web browser.
    </p>

    <p>
      It is important to remember that the application we are building is
      decentralized. Decentralized applications (DApps) follow certain
      principles.
    </p>
    <ul>
      <li>
        The backend should consist solely of smart contracts and should not rely
        on any centralized servers.
      </li>
      <li>
        The frontend should run entirely on the client side and have open-source
        code.
      </li>
    </ul>
    <p>
      There are other rules as well, but for now, these two are the most
      important. By following them, we ensure that our frontend does not depend
      on an internal server. If such a server were used, it would be centralized
      (since not all end users would have equal access), and as a result, our
      entire application would also become centralized.
    </p>

    <p>
      In this chapter, we will work with another TON wallet called Tonkeeper.
      This will help you better understand how different wallets work. The
      wallet will interact with our application via the TON Connect 2 protocol.
      If you have chosen a wallet different from Tonkeeper, please ensure that
      it supports this version of TON Connect. Don’t forget to check that your
      wallet is connected to the correct network—either the testnet or mainnet.
    </p>

    <ul>
      <li>
        By default, Tonkeeper operates on the main TON network. If you decide to
        work on the test network, you will need to manually switch the
        application to developer mode. Open the settings tab and quickly click
        five times on the app version at the bottom. A developer menu should
        appear. Switch it to testnet. You can return to the mainnet in the same
        way.
      </li>
    </ul>

    <h3>TON Connect</h3>
    <p>
      Let’s understand why we need TON Connect when creating the user interface
      for our contract.
    </p>
    <p>In our project, there are 3 parties involved:</p>
    <ul>
      <li>
        The TON blockchain enables the creation of scalable applications and
        services with a minimal level of trust.
      </li>
      <li>
        Applications implement the user interface for an infinite set of
        TON-based functions, relying on smart contracts, but do not have instant
        access to users’ funds.
      </li>
      <li>
        Wallets provide the user interface for confirming transactions and
        securely store users’ cryptographic keys on their personal devices.
      </li>
    </ul>
    <p>
      This separation allows for the rapid implementation of innovations and
      ensures a high level of security for users: wallets don’t need to build
      secure systems themselves, and applications don’t need to take on the risk
      of storing end users' accounts.
    </p>
    <p>
      TON Connect is a bridge that overcomes this conceptual gap. In short, TON
      Connect simplifies the interaction of applications with the TON blockchain
      via end users' wallets.
    </p>
    <p>
      You may sometimes come across TON Connect 2, which is the most modern
      version of the protocol. Use wallets that support TON Connect 2.
    </p>

    <h3>Setting Up Our dApp Project</h3>
    <p>
      We will create our frontend using React. For the project, we will use Vite
      and its React template. Choose a name for the project, such as
      counter-front-end, then open the terminal and execute the following
      commands:
    </p>
    <pre>
      <code>
        yarn create vite counter-front-end --template react-ts cd
        counter-front-end && yarn
      </code>
    </pre>

    <p>
      You will need to install a few more packages to interact with the TON
      blockchain. We have already seen them in action in previous chapters when
      writing tests and compilation/deployment scripts. Execute the following
      commands in the terminal:
    </p>
    <pre>
      <code>
        yarn add ton ton-core ton-crypto yarn add @orbs-network/ton-access
      </code>
    </pre>

    <p>
      And lastly, but equally important: we need to overcome the TON library's
      dependency on Nodejs Buffer, which is unavailable in the browser. We can
      do this by installing a polyfill:
    </p>
    <pre>
      <code>yarn add vite-plugin-node-polyfills</code>
    </pre>

    <p>
      To complete the Buffer fix, update the <code>vite.config.ts</code> file:
    </p>
    <pre>
      <code>
        {`import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills()],
  base: '/',
});
`}
      </code>
    </pre>
    <video controls playsInline>
      <source src="https://cdn.stepik.net/video/326918/1080/33d84092bd09e7dad7bc71e702ad4015.mp4" />
    </video>
    <p>To see the empty template of the app, run it in the terminal:</p>
    <pre>
      <code>yarn dev</code>
    </pre>
    <p>
      Then, open your web browser and visit the link from the CLI results
      (something like <code>http://localhost:5173/</code>). You will see a new
      page with the content of the Vite TypeScript template.
    </p>
    <p>
      Hooray! We are ready to start working with TON Connect to authenticate the
      end user for interacting with our DApp.
    </p>

    <p>
      <i>
        P. S. Thanks for the inspiration for some parts of this guide to the
        amazing Shahar Yakir from the Orbs team.
      </i>
    </p>
  </div>
);
export const Lesson5_2 = () => (
  <div>
    <video controls playsInline>
      <source src="https://cdn.stepik.net/video/326919/1080/b79924b0bf9a6ff0fff2f0b92738a3d5.mp4" />
    </video>
    <h2>📚 Lesson Summary</h2>
    <p>
      The TON Connect React library will provide us with several useful
      services:
    </p>
    <ul>
      <li>
        Displaying a list of wallets that support TON Connect 2 to the end user
      </li>
      <li>Requesting the public wallet address of the user</li>
      <li>Making a transaction request through the wallet</li>
    </ul>

    <h3>Install the library via the terminal:</h3>
    <pre>
      <code>yarn add @tonconnect/ui-react</code>
    </pre>

    <p>
      When our application connects to the user's wallet, we must provide
      information about ourselves. "Who is requesting confirmation?". We need to
      identify ourselves using a manifest file. The wallet will ask the user for
      permission to connect to the app and display information from the
      manifest.
    </p>

    <h3>The structure of the manifest file looks like this:</h3>
    <pre>
      <code>
        {`{
  "url": "",
  "name": "Example",
  "iconUrl": ""
}`}
      </code>
    </pre>

    <p>I will use this content for the manifest.json file:</p>
    <pre>
      <code>
        {`{
  "url": "https://join.toncompany.org",
  "name": "TON&Co. Tutorial",
  "iconUrl": "https://raw.githubusercontent.com/markokhman/func-course-chapter-5-code/master/public/tonco.png"
}`}
      </code>
    </pre>

    <p>
      Once I create the <code>public/manifest.json</code> file, add this content
      to it, and push it to the remote repository, my manifest will be available
      here:
    </p>
    <a
      href="https://raw.githubusercontent.com/markokhman/func-course-chapter-5-code/master/public/manifest.json"
      target="_blank"
      rel="noopener noreferrer"
    >
      https://raw.githubusercontent.com/markokhman/func-course-chapter-5-code/master/public/manifest.json
    </a>

    <p>
      The manifest must be publicly available on the internet. You can either
      follow my example and create your own manifest, or temporarily use the
      example I deployed earlier during development. Later, when we deploy our
      site, you will need to replace this example with your actual manifest.
    </p>

    <h3>
      Modify the <code>src/main.tsx</code> file to use the TON Connect provider:
    </h3>
    <pre>
      <code>
        {`import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

// this manifest is used temporarily for development purposes
const manifestUrl = 'https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    <App />
  </TonConnectUIProvider>,
)`}
      </code>
    </pre>

    <h3>Adding the Connect Button to the App</h3>
    <p>
      The first thing we will offer the user is to connect their wallet to the
      app. By connecting, the user agrees to provide the app with the public
      address of their wallet. This is not very risky, as the wallet's
      transaction history and balance are already publicly available on the
      blockchain.
    </p>

    <h3>
      Modify the contents of the <code>src/App.tsx</code> file to:
    </h3>
    <pre>
      <code>
        {`import './App.css';
import { TonConnectButton } from '@tonconnect/ui-react';

function App() {
  return (
    <div>
      <TonConnectButton />
    </div>
  );
}

export default App;`}
      </code>
    </pre>

    <h3>Running the App</h3>
    <p>To run the app, enter the following command in the terminal:</p>
    <pre>
      <code>npm run dev</code>
    </pre>
    <p>
      Then, refresh the browser displaying your previous link. I assume you're
      using a browser on your computer where you're doing the development, and
      the Tonkeeper wallet is installed on your mobile device. Click Connect
      Wallet on the desktop and select Tonkeeper (or any other supported wallet
      you are using).
    </p>

    <p>
      TON Connect supports both smartphone-to-smartphone and
      computer-to-smartphone modes. Since our development is in
      computer-to-smartphone mode, TON Connect will use QR code scanning to
      connect to the wallet on your smartphone. Open the Tonkeeper mobile app,
      click on the QR button in the upper right corner, and scan the code from
      the desktop screen.
    </p>

    <p>
      If everything is connected correctly, you should see a confirmation dialog
      in the mobile wallet app. Once you approve the connection, you will see
      your address in the web app's user interface!
    </p>

    <p>
      <i>
        P. S. Thanks for the inspiration for some parts of this guide to the
        amazing Shahar Yakir from the Orbs team.
      </i>
    </p>
  </div>
);
export const Lossen5_3 = () => {
  return (
    <div>
      <p>Here must be video</p>
      <h2>📚 Lesson Summary</h2>
      <p>
        At this point, we have already implemented user authentication to
        interact with our contract. Now, let's connect the DApp to our contract
        that we developed earlier.
      </p>
      <p>
        There are a few requirements that need to be considered to correctly
        implement the steps in this and the following lessons:
      </p>
      <ul>
        <li>
          We will work with the testnet. Make sure your contract from lesson 5
          of chapter 4 is deployed on the testnet.
        </li>
        <li>
          Make sure you deployed this contract with the necessary initial data,
          specifically:
        </li>
        <ul>
          <li>the counter value,</li>
          <li>the address of the last sender,</li>
          <li>
            the owner address — this should be the address of your active wallet
            on the testnet, as you are going to perform withdrawal operations,
            and as you remember, the logic of our contract will reject any
            attempts to withdraw funds not from the owner.
          </li>
        </ul>
        <li>Make sure you have testnet coins. You can easily get them here.</li>
      </ul>
      <p>
        By now, I assume you have deployed your contract from lesson 5 of
        chapter 4 on the testnet and know its address. Here is my contract
        address:
      </p>
      <p>
        <code>EQCS7PUYXVFI-4uvP1_vZsMVqLDmzwuimhEPtsyQKIcdeNPu</code>
      </p>
      <p>
        As you remember, we already worked with our contract while writing
        tests. We created a wrapper file that helped us send internal messages
        to the contract, as well as invoke getter methods. A pleasant surprise:
        now we can use the same wrapper file :)
      </p>
      <p>
        Let's create a new folder <code>contracts</code> inside the{" "}
        <code>src</code> folder and copy the file{" "}
        <code>wrapper/MainContract.ts</code> from the previous section. You can
        also find it in my repository. The contract wrapper for our DApp is
        located at <code>src/contracts/MainContract.ts</code>.
      </p>
      <p>
        Now we have a suitable wrapper for the contract, but how do we connect
        it to the on-chain contract from the browser? In chapter 3, we
        determined whether the contract was deployed using the{" "}
        <code>TonClient</code> instance from the <code>ton</code> library. It
        used the RPC provider ton-access to retrieve information from the
        blockchain (thanks to the Orbs team) and send requests to our contract.
        In this lesson, we will use the same logic.
      </p>
      <p>
        Before we begin, let's do something "very React-ish" — implement a
        general-purpose React hook to help us initialize async objects. We will
        use it to connect to TonClient.
      </p>
      <p>
        Create the file <code>src/hooks/useAsyncInitialize.ts</code> with the
        following content:
      </p>
      <pre>
        <code>
          {`import {"{ useEffect, useState }"} from "react";
          <br />
          export function useAsyncInitialize {"<T>"}(func: () => Promise{"<T>"},
          deps: any[] = []) {"{"} <br />
          {"  "}const [state, setState] = useState{"<T | undefined>"}(); <br />
          {"  "}useEffect(() => {"{"} <br />
          {"    "}(async () => {"{"} <br />
          {"      "}setState(await func()); <br />
          {"    "}})(); <br />
          {"  "}}, deps); <br />
          {"  "}return state; <br />
          {"}"}`}
        </code>
      </pre>
      <p>
        Next, we will create another React hook that will rely on{" "}
        <code>useAsyncInitialize</code> to initialize the RPC client in our
        application. As we mentioned earlier, we will use TON Access, which will
        provide us with free access to the API without throttling. It is also
        decentralized, which is the preferred method for accessing the network.
      </p>
      <p>
        Create <code>src/hooks/useTonClient.ts</code> with the following
        content:
      </p>
      <pre>
        <code>
          {`import {"{ getHttpEndpoint }"} from "@orbs-network/ton-access"; <br />
          import {"{ TonClient }"} from "ton"; <br />
          import {"{ useAsyncInitialize }"} from "./useAsyncInitialize"; <br />
          export function useTonClient() {"{"} <br />
          {"  "}return useAsyncInitialize( <br />
          {"    "}async () => <br />
          {"      "}new TonClient({"{"} <br />
          {"        "}endpoint: await getHttpEndpoint({"{"} network: "testnet" {"}"}), <br />
          {"      "}}) <br />
          ); <br />
          {"}"}`}
        </code>
      </pre>
      <p>
        Let's create another hook called <code>useMainContract()</code>, which
        will take the on-chain address of the deployed contract and invoke the
        getter method of our contract (using the .getData() method of our
        wrapper).
      </p>
      <p>Here is the code for this hook:</p>
      <pre>
        <code>
          {`import {"{ useEffect, useState }"} from "react"; <br />
          import {"{ MainContract }"} from "../contracts/MainContract"; <br />
          import {"{ useTonClient }"} from "./useTonClient"; <br />
          import {"{ useAsyncInitialize }"} from "./useAsyncInitialize"; <br />
          import {"{ Address, OpenedContract }"} from "ton-core"; <br /><br />
          export function useMainContract() {"{"} <br />
          {"  "}const client = useTonClient(); <br />
          {"  "}const [contractData, setContractData] = useState{"<null | { counter_value: number; recent_sender: Address; owner_address: Address; }>()"}(); <br /><br />
          {"  "}const mainContract = useAsyncInitialize(async () => {"{"} <br />
          {"    "}if (!client) return; <br />
          {"    "}const contract = new MainContract( <br />
          {"      "}Address.parse("EQCS7PUYXVFI-4uvP1_vZsMVqLDmzwuimhEPtsyQKIcdeNPu") <br />
          {"    "}); <br />
          {"    "}return client.open(contract) as OpenedContract{"<MainContract>"}; <br />
          {"  "}}, [client]); <br /><br />
          {"  "}useEffect(() => {"{"} <br />
          {"    "}async function getValue() {"{"} <br />
          {"      "}if (!mainContract) return; <br />
          {"      "}setContractData(null); <br />
          {"      "}const val = await mainContract.getData(); <br />
          {"      "}setContractData({"{"} <br />
          {"        "}counter_value: val.number, <br />
          {"        "}recent_sender: val.recent_sender, <br />
          {"        "}owner_address: val.owner_address, <br />
          {"      "}}); <br />
          {"    "}} <br />
          {"    "}getValue(); <br />
          {"  "}}, [mainContract]); <br /><br />
          {"  "}return {"{"} <br />
          {"    "}contract_address: mainContract?.address.toString(), <br />
          {"    "...contractData, <br />
          {"  "}}; <br />
          {"}"}`}
        </code>
      </pre>
      <p>
        Now we are ready to display the data we read from the blockchain in our
        interface.
      </p>
      <p>
        Let's replace the contents of our <code>src/App.tsx</code> file:
      </p>
      <pre>
        <code>
          {`import "./App.css"; <br />
          import {"{ TonConnectButton }"} from "@tonconnect/ui-react"; <br />
          import {"{ useMainContract }"} from "./hooks/useMainContract"; <br /><br />
          function App() {"{"} <br />
          {"  "}const {"{"} <br />
          {"    "}contract_address, <br />
          {"    "}counter_value, <br />
          {"    "}recent_sender, <br />
          {"    "}owner_address, <br />
          {"    "}contract_balance, <br />
          {"  "} = useMainContract(); <br /><br />
          {"  "}return ( <br />
          {"    "}&lt;div&gt; <br />
          {"      "}&lt;div&gt; <br />
          {"        "}&lt;TonConnectButton /&gt; <br />
          {"      "}&lt;/div&gt; <br />
          {"      "}&lt;div&gt; <br />
          {"        "}&lt;div className='Card'&gt;Contract address: {"{"}contract_address{"}"}</div> <br />
          {"        "}&lt;div className='Card'&gt;Counter value: {"{"}counter_value{"}"}</div> <br />
          { "        " }& lt;div className = 'Card' & gt;Recent sender: { "{" }recent_sender{ "}" }</div > <br />
  { "        " }& lt;div className = 'Card' & gt;Owner address: { "{" }owner_address{ "}" }</div > <br />
  { "        " }& lt;div className = 'Card' & gt;Contract balance: { "{" }contract_balance{ "}" }</div > <br />
  { "      " }& lt; /div&gt; <br / >
    { "    "} & lt; /div&gt; <br / >
      { "  "}); <br />
} <br />
export default App;`}
        </code>
      </pre>
      <h2>🎉 Congratulations! 🥳</h2>
      <p>
        Now you can easily connect to your deployed contract and view all its
        data on your DApp. You can improve your app by adding a withdrawal
        function and connecting your frontend to allow users to withdraw funds
        from the contract. Stay tuned for the next lessons!
      </p>
    </div>
  );
};
export const Lesson5_4 = () => {
  return (
    <div>
      <div>
        <video controls playsInline>
          <source src="https://cdn.stepik.net/video/326921/1080/d3e709dcff55de269b1c991a69658353.mp4" />
        </video>
        <p>Here must be video</p>
        <h2>📚 Lesson Summary</h2>
        <p>
          We have set up read-only interaction, now let’s work with the contract
          through transaction submissions.
        </p>
        <p>
          The first function we developed for our contract is the increment.
          Let’s add a button on the main screen that sends the corresponding
          transaction. As you remember, sending a transaction on the blockchain
          consumes gas, so we expect the user to approve this action in their
          wallet, which will show how many TON coins will be spent.
        </p>
        <p>
          Before we begin, we’ll add another hook that will generate a sender
          object from the TON Connect interface. This sender represents the
          connected wallet and will allow us to send transactions on its behalf.
          While working on the transaction request, we will also display the
          wallet connection status in the UI, so our UI can hide elements that
          require authorization.
        </p>
        <p>
          As in previous lessons, let’s use a React hook to add some
          functionality that we will use in our code later.
        </p>
        <p>
          Create <code>src/hooks/useTonConnect.ts</code> with the following
          content:
        </p>
        <pre>
          <code>
            {`import { useTonConnectUI } from '@tonconnect/ui-react';
  import { Sender, SenderArguments } from 'ton-core';
  
  export function useTonConnect() {
    const [tonConnectUI] = useTonConnectUI();
  
    return {
      sender: {
        send: async (args: SenderArguments) => {
          tonConnectUI.sendTransaction({
            messages: [{
              address: args.to.toString(),
              amount: args.value.toString(),
              payload: args.body?.toBoc().toString('base64'),
            }],
            validUntil: Date.now() + 5 * 60 * 1000,
          });
        }
      },
      connected: tonConnectUI.connected,
    };
  }`}
          </code>
        </pre>
        <p>
          Now let's improve our <code>useMainContract</code> hook with two small
          functions:
        </p>
        <ul>
          <li>
            Automatic polling of the counter every 5 seconds. This is needed to
            show the user that the value has actually changed.
          </li>
          <li>
            Demonstrating the <code>sendIncrement</code> function in our
            interface class and connecting it to the sender.
          </li>
        </ul>
        <p>Let’s update the code by adding a few things:</p>
        <pre>
          <code>
            {`import { toNano } from "ton-core";
  import { useTonConnect } from "./useTonConnect";
  
  export function useMainContract() {
    const { sender } = useTonConnect();
  
    const sleep = (time: number) => new Promise((resolve) =>
      setTimeout(resolve, time)
    );
  
    useEffect(() => {
      async function getValue() {
        await sleep(5000);
        getValue();
      }
      getValue();
    }, [counterContract]);
  
    return {
      value: val,
      address: counterContract?.address.toString(),
      sendIncrement: () => {
        return mainContract?.sendIncrement(sender, toNano(0.05), 3);
      }
    };
  }`}
          </code>
        </pre>
        <p>Now let’s update the interface:</p>
        <pre>
          <code>
            {`import { useTonConnect } from "./hooks/useTonConnect";
  
  function App() {
    const { sendIncrement } = useMainContract();
    const { connected } = useTonConnect();
  
    return (
      <div>
        {connected && (
          <a onClick={() => sendIncrement()}>Increment</a>
        )}
      </div>
    );
  }`}
          </code>
        </pre>
      </div>
    </div>
  );
};
export const Lesson9 = () => {
  return (
    <>
      <video controls playsInline>
        <source src="https://cdn.stepik.net/video/326957/1080/c48cdf514daf44e93ee8a049d137d1e4.mp4" />
        Your browser does not support the video tag.
      </video>

      <video controls playsInline>
        <source src="https://cdn.stepik.net/video/326958/1080/9fab44560cd2e1454acb3fab0cc06f14.mp4" />
        Your browser does not support the video tag.
      </video>

      <video controls playsInline>
        <source src="https://cdn.stepik.net/video/326959/1080/d059d5a9b5fb5c3866c8c8ed827a0dad.mp4" />
        Your browser does not support the video tag.
      </video>

      <video controls playsInline>
        <source src="https://cdn.stepik.net/video/326960/1080/de7bea03b8a1fed81a8996b849fdf4b4.mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};
